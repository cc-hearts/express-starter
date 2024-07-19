import { Chalk } from 'chalk'
import { LogLevel } from '../constants/logger'

const chalk = new Chalk({ level: 1 })

export class Logger {
  private static level: LogLevel = LogLevel.DEBUG
  public setLevel(level: LogLevel) {
    Logger.level = level
  }

  static log(level: LogLevel, message: string, error?: Error) {
    if (level < Logger.level) return
    const timeStamp = new Date().toISOString()
    const stack = error?.stack || ''
    console.log(
      [
        chalk.blue(`[${timeStamp}]`),
        chalk.green(`[${level}]:`),
        chalk.white(message),
        chalk.red(stack)
      ].join(' ')
    )
  }

  static Debug(message: string) {
    Logger.log(LogLevel.DEBUG, message)
  }

  static Info(message: string) {
    Logger.log(LogLevel.INFO, message)
  }

  static Warn(message: string) {
    Logger.log(LogLevel.WARN, message)
  }

  static Error(message: string, error?: Error) {
    Logger.log(LogLevel.ERROR, message, error)
  }

  static Fatal(message: string, error?: Error) {
    Logger.log(LogLevel.FATAL, message, error)
  }
}
