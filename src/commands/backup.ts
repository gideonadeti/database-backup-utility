import 'dotenv/config'
import {Command, Flags} from '@oclif/core'

import {backupPostgres} from '../utils/backup-db.js'
import detectDbType from '../utils/detect-db-type.js'

export default class Backup extends Command {
  static override description = 'Backup a database'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    output: Flags.string({char: 'o', default: './dbu-backups', description: 'Output directory'}),
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
      case 'postgres': {
        return backupPostgres(url)
      }
    }
  }
}
