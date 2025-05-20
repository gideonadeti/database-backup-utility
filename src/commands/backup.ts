import 'dotenv/config'
import {Command, Flags} from '@oclif/core'

import {backupMongo, backupMySQL, backupPostgres, backupSQLite} from '../utils/backup-db.js'
import detectDbType from '../utils/detect-db-type.js'

export default class Backup extends Command {
  static override description = 'Backup a database'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    url: Flags.string({char: 'u', description: 'Database URL'}),
  }

  public async run() {
    const {flags} = await this.parse(Backup)
    const url = flags.url || process.env.DB_URL

    if (!url) {
      this.error('Database URL is required.')
    }

    const dbType = detectDbType(url)

    switch (dbType) {
      case 'mongodb': {
        return backupMongo(url)
      }

      case 'mysql': {
        return backupMySQL(url)
      }

      case 'postgres': {
        return backupPostgres(url)
      }

      case 'sqlite': {
        return backupSQLite(url)
      }

      default: {
        this.error('Unsupported database type.')
      }
    }
  }
}
