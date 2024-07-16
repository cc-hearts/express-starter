import { isFn } from '@cc-heart/utils'
import type { Express } from 'express'
import express from 'express'
import type { fn } from './create-error-handler'
import { createErrorHandler } from './create-error-handler'
export function createRouterFactory(prefix: string = '/') {
  const router = express.Router()

  const setup = (app: Express) => {
    app.use(prefix, router)
  }

  const { post, get, put, delete: del, all, patch, options } = router

  router.post = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    post.apply(router, newRest)
  }

  router.get = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    get.apply(router, newRest)
  }

  router.put = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    put.apply(router, newRest)
  }

  router.delete = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    del.apply(router, newRest)
  }

  router.all = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    all.apply(router, newRest)
  }

  router.patch = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    patch.apply(router, newRest)
  }

  router.options = (...rest: any): any => {
    const newRest = rest.map((target: string | fn) => {
      if (isFn(target)) {
        return createErrorHandler(target)
      }
      return target
    })
    options.apply(router, newRest)
  }
  return { router, setup }
}
