import type { NextFunction, Request, Response } from 'express'

export type fn = (req: Request, res: Response, next: NextFunction) => void

export function createErrorHandler(fn: fn) {
  return function (req: Request, res: Response, next: NextFunction) {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}
