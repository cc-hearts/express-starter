import type { Fn } from '@cc-heart/utils/helper'
import { AsyncLocalStorage } from 'async_hooks'
import type { Express, Request, Response } from 'express'

export const asyncLocalStorage = new AsyncLocalStorage()

let reqSed = 0
export const map = new Map<number, any>()
function asyncContext(req: Request, res: Response, next: Fn) {
  reqSed++
  return asyncLocalStorage.run(reqSed, () => {
    map.set(reqSed, { req, res })
    res.on('close', () => {
      map.delete(reqSed)
    })
    next()
  })
}
export function setupAsyncContextBefore(app: Express) {
  app.use(asyncContext)
}
