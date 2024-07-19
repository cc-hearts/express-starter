import type { Express } from 'express'
import { setupParseJson } from './parse-json'
import { setupErrorCatch } from './error-catch'
import { setupAllowCrossDomain } from './allow-cross-domain'
import { setupAsyncContextBefore } from './async-context'
import type { SetupFn } from '../types/helper'

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
