import type { RouterFn } from '../types/helper'
import { nextAsyncContext } from '../context/next-async-context'

export function createErrorHandler(fn: RouterFn): RouterFn {
  return function (req, res, next) {
    const uniqueId = nextAsyncContext.getUniqueId()
    nextAsyncContext.asyncLocalStorage.run(uniqueId, () => {
      nextAsyncContext.setContext(uniqueId, next)
      Promise.resolve(fn(req, res, next))
        .catch(next)
        .finally(() => {
          nextAsyncContext.removeContext(uniqueId)
        })
    })
  }
}
