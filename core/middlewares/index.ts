import type { Express } from 'express'
import { setupParseJson } from './parse-json.js'
import { setupErrorCatch } from './error-catch.js'
import { setupAllowCrossDomain } from './allow-cross-domain.js'
import { setupAsyncContextBefore } from './async-context.js'
import type { SetupFn } from '../types/helper.js'

export async function beforeLoadMiddle(app: Express, middlewares: SetupFn[]) {
  return Promise.all(
    [
      setupAsyncContextBefore,
      setupAllowCrossDomain,
      setupParseJson,
      ...middlewares
    ].map((setup) => setup(app))
  )
}

export async function afterLoadMiddle(app: Express) {
  return Promise.all([setupErrorCatch].map((setup) => setup(app)))
}
