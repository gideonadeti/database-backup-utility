import 'dotenv/config'
import {Command, Flags} from '@oclif/core'

import {chalkError} from '../utils/apply-chalk.js'
import {backupPostgres} from '../utils/backup-db.js'

export default class Backup extends Command {
  static override description = 'Backup a database'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    output: Flags.string({char: 'o', default: './dbu-backups', description: 'Output directory'}),
    url: Flags.string({char: 'u', description: 'Database URL'}),
  }

  public async run() {
    const {flags} = await this.parse(Backup)
    const {output} = flags
    const url = flags.url || process.env.DB_URL

    if (!url) {
      this.error(chalkError('Database URL not provided', 'Use --url or set DB_URL environment variable'))
    }

    try {
      const dbType = url.split(':')[0]

      switch (dbType) {
        case 'postgresql': {
          await backupPostgres(url, output)

          break
        }

        default: {
          this.error(chalkError('Unsupported database type', 'Supported database types: postgresql'))
        }
      }
    } catch (error) {
      console.error(error)
      this.error(chalkError(`Failed to backup database`))
    }
  }
}
