import {format} from 'date-fns'
import {execa} from 'execa'
import fse from 'fs-extra'
import path from 'node:path'
import {URL} from 'node:url'
import ora from 'ora'

import {chalkInfo, chalkSuccess} from './apply-chalk.js'

const backupPostgres = async (dbUrl: string, outputDir: string) => {
  await fse.ensureDir(outputDir)

  // Parse URL and extract connection info
  const parsedUrl = new URL(dbUrl)
  const user = parsedUrl.username
  const host = parsedUrl.hostname
  const dbName = parsedUrl.pathname.replace(/^\//, '')
  const {password} = parsedUrl
  const {port} = parsedUrl

  // Validate required fields
  if (!user) throw new Error('Missing username in the database URL')
  if (!host) throw new Error('Missing host in the database URL')
  if (!dbName) throw new Error('Missing database name in the database URL')
  if (!password) throw new Error('Missing password in the database URL')
  if (!port) throw new Error('Missing port in the database URL')

  // Prepare pg_dump args
  const args = [`--host=${host}`, `--port=${port}`, `--username=${user}`, `--dbname=${dbName}`]

  // Prepare output filename with timestamp
  const timestamp = format(new Date(), 'yyyy-MM-dd_HH-mm-ss')
  const fileName = `${dbName}_${timestamp}.sql`
  const filePath = path.join(outputDir, fileName)

  const spinner = ora(chalkInfo(`Backing up PostgreSQL database "${dbName}" to ${filePath}...`)).start()

  // Start backup process and stream output to file
  const outStream = fse.createWriteStream(filePath)
  const subprocess = execa('pg_dump', args, {
    env: {
      ...process.env,
      PGPASSWORD: password,
    },
  })

  subprocess.stdout?.pipe(outStream)

  try {
    await subprocess

    spinner.succeed(chalkSuccess(`Backup saved to ${filePath}`))
  } catch (error) {
    spinner.fail()

    throw error
  }
}

export {backupPostgres}
