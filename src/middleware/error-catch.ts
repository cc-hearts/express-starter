import type { Fn } from '@cc-heart/utils/helper'
import type { Express, Request, Response } from 'express'
import { useHookFactory } from '../hooks/use-hook-factory.js'

function errorCatch(err: Error, req: Request, res: Response, next: Fn) {
  const { useThrowServiceError } = useHookFactory(req, res)
  console.error('[error catch]:', err)
  useThrowServiceError(err?.toString())
  next()
}

export function setupErrorCatch(app: Express) {
  app.use(errorCatch)
}
