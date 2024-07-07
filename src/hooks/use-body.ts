import type { Request, Response } from 'express'
import { registerHook } from './register-hook.js'
import { isObject } from '@cc-heart/utils'

registerHook('useBody', <T>(req: Request, _res: Response, initialValue: T) => {
  const body = req.body
  if (!body && initialValue) {
    return initialValue
  }

  if (req.get('Content-Type') === 'application/json') {
    if (isObject(initialValue) && isObject(body)) {
      return Object.assign(initialValue, body)
    }
    return body || initialValue
  }

  return body
})
