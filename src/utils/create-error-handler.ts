import { AsyncLocalStorage } from 'async_hooks'
import type { NextFunction, Request, Response } from 'express'

export type fn = (req: Request, res: Response, next: NextFunction) => void
let reqSed = 0,
  map = new Map<number, any>()
const asyncLocalStorage = new AsyncLocalStorage()
export function createErrorHandler(fn: fn) {
  return function (req: Request, res: Response, next: NextFunction) {
    reqSed++
    asyncLocalStorage.run(reqSed, () => {
      map.set(reqSed, next)
      Promise.resolve(fn(req, res, next))
        .catch(next)
        .finally(() => {
          map.delete(reqSed)
        })
    })
  }
}

export function useNext() {
  return map.get(asyncLocalStorage.getStore() as number) as NextFunction
}
