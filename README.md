database-backup-utility
=================

A database backup utility that can backup and restore any DB.


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/database-backup-utility.svg)](https://npmjs.org/package/database-backup-utility)
[![Downloads/week](https://img.shields.io/npm/dw/database-backup-utility.svg)](https://npmjs.org/package/database-backup-utility)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g database-backup-utility
$ dbu COMMAND
running command...
$ dbu (--version)
database-backup-utility/0.0.0 linux-x64 node-v22.15.0
$ dbu --help [COMMAND]
USAGE
  $ dbu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dbu hello PERSON`](#dbu-hello-person)
* [`dbu hello world`](#dbu-hello-world)
* [`dbu help [COMMAND]`](#dbu-help-command)
* [`dbu plugins`](#dbu-plugins)
* [`dbu plugins add PLUGIN`](#dbu-plugins-add-plugin)
* [`dbu plugins:inspect PLUGIN...`](#dbu-pluginsinspect-plugin)
* [`dbu plugins install PLUGIN`](#dbu-plugins-install-plugin)
* [`dbu plugins link PATH`](#dbu-plugins-link-path)
* [`dbu plugins remove [PLUGIN]`](#dbu-plugins-remove-plugin)
* [`dbu plugins reset`](#dbu-plugins-reset)
* [`dbu plugins uninstall [PLUGIN]`](#dbu-plugins-uninstall-plugin)
* [`dbu plugins unlink [PLUGIN]`](#dbu-plugins-unlink-plugin)
* [`dbu plugins update`](#dbu-plugins-update)

## `dbu hello PERSON`

Say hello

```
USAGE
  $ dbu hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ dbu hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/gideonadeti/database-backup-utility/blob/v0.0.0/src/commands/hello/index.ts)_

## `dbu hello world`

Say hello world

```
USAGE
  $ dbu hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ dbu hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/gideonadeti/database-backup-utility/blob/v0.0.0/src/commands/hello/world.ts)_

## `dbu help [COMMAND]`

Display help for dbu.

```
USAGE
  $ dbu help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dbu.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `dbu plugins`

List installed plugins.

```
USAGE
  $ dbu plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dbu plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/index.ts)_

## `dbu plugins add PLUGIN`

Installs a plugin into dbu.

```
USAGE
  $ dbu plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dbu.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DBU_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DBU_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dbu plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dbu plugins add myplugin

  Install a plugin from a github url.

    $ dbu plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dbu plugins add someuser/someplugin
```

## `dbu plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dbu plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dbu plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/inspect.ts)_

## `dbu plugins install PLUGIN`

Installs a plugin into dbu.

```
USAGE
  $ dbu plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dbu.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DBU_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DBU_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dbu plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dbu plugins install myplugin

  Install a plugin from a github url.

    $ dbu plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dbu plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/install.ts)_

## `dbu plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ dbu plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dbu plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/link.ts)_

## `dbu plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dbu plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dbu plugins unlink
  $ dbu plugins remove

EXAMPLES
  $ dbu plugins remove myplugin
```

## `dbu plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ dbu plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/reset.ts)_

## `dbu plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dbu plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dbu plugins unlink
  $ dbu plugins remove

EXAMPLES
  $ dbu plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/uninstall.ts)_

## `dbu plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dbu plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dbu plugins unlink
  $ dbu plugins remove

EXAMPLES
  $ dbu plugins unlink myplugin
```

## `dbu plugins update`

Update installed plugins.

```
USAGE
  $ dbu plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/update.ts)_
<!-- commandsstop -->
