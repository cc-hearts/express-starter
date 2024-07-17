import { isFn } from '@cc-heart/utils'
import type { Express } from 'express'
import express from 'express'
import type { RouterFn } from '../types/helper'
import { createErrorHandler } from './create-error-handler-factory'
import type { Fn } from '@cc-heart/utils/helper'

export function createRouterFactory(prefix: string = '/') {
  const router = express.Router()

  const setup = (app: Express) => {
    app.use(prefix, router)
  }

  const { post, get, put, delete: del, all, patch, options } = router
  const resultMethodNames = [
    'post',
    'get',
    'put',
    'delete',
    'all',
    'patch',
    'options'
  ]

  const findRequestMethodName = (method: Fn) => {
    const [name] =
      resultMethodNames.filter((key) => Reflect.get(router, key) === method) ||
      []
    return name
  }

  ;[post, get, put, del, all, patch, options].forEach((callback) => {
    const name = findRequestMethodName(callback)
    if (name) {
      Reflect.set(router, name, function (this: any, ...rest: any) {
        const newRest = rest.map((target: string | RouterFn) => {
          if (isFn(target)) {
            return createErrorHandler(target)
          }
          return target
        })
        callback.apply(this, newRest)
      })
    }
  })

  return { router, setup }
}
