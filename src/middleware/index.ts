import type { Express } from 'express'
import { setupParseJson } from './parse-json.js'
import { setupErrorCatch } from './error-catch.js'
import { setupAllowCrossDomain } from './allow-cross-domain.js'
import { setupAsyncContextBefore } from './async-context.js'
export async function beforeLoadMiddle(app: Express) {
  return Promise.all(
    [setupAsyncContextBefore, setupAllowCrossDomain, setupParseJson].map(
      (setup) => setup(app)
    )
  )
}

export async function afterLoadMiddle(app: Express) {
  return Promise.all([setupErrorCatch].map((setup) => setup(app)))
}
