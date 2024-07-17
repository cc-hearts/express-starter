import type { Fn } from '@cc-heart/utils/helper'
import type { Express, Request, Response } from 'express'
import { requestAsyncContext } from '../context/request-async-context'

function asyncContext(req: Request, res: Response, next: Fn) {
  const uniqueId = requestAsyncContext.getUniqueId()
  return requestAsyncContext.asyncLocalStorage.run(uniqueId, () => {
    requestAsyncContext.setContext(uniqueId, { req, res })
    res.on('close', () => {
      requestAsyncContext.removeContext(uniqueId)
    })
    next()
  })
}

export function setupAsyncContextBefore(app: Express) {
  app.use(asyncContext)
}
