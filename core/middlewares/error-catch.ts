import type { Fn } from '@cc-heart/utils/helper'
import type { Express, Request, Response } from 'express'
import { useHookFactory } from '../composables/use-hook-factory'
import { Logger } from '../utils/logger'

function errorCatch(err: Error, req: Request, res: Response, next: Fn) {
  const { useThrowServiceError } = useHookFactory(req, res)
  Logger.Error(`[[NO CAPTURE ERROR]: ${err?.toString()}]`, err)
  useThrowServiceError('The service error is occurred')
  next()
}

export function setupErrorCatch(app: Express) {
  app.use(errorCatch)
}
