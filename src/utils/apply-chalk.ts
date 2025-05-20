import chalk from 'chalk'

type ChalkColor = 'cyan' | 'green' | 'red' | 'yellow'

const applyChalk = (color: ChalkColor, message: string, additionalInfo?: string) => {
  let result = chalk[color](message)

  if (additionalInfo) {
    result += `\n${chalk.yellow(additionalInfo)}`
  }

  return result
}

const chalkInfo = (message: string, additionalInfo?: string) => applyChalk('cyan', message, additionalInfo)
const chalkSuccess = (message: string, additionalInfo?: string) => applyChalk('green', message, additionalInfo)
const chalkError = (message: string, additionalInfo?: string) => applyChalk('red', message, additionalInfo)
const chalkWarning = (message: string, additionalInfo?: string) => applyChalk('yellow', message, additionalInfo)

export {chalkError, chalkInfo, chalkSuccess, chalkWarning}
