import express, { type Express } from 'express'
import { afterLoadMiddle, beforeLoadMiddle } from './middlewares/index.js'
import type { Fn } from '@cc-heart/utils/helper'
import { isFn, noop } from '@cc-heart/utils'
import type { RouterFn, SetupFn } from './types/helper.js'

export * from './composables/index'
export * from './utils/index.js'
/**
 * create a express services
 */
export async function create() {
  //
  const app: Express = express()

  let modules: SetupFn[] = []
  // register service modules
  const registerRouter = (routerModules: SetupFn[]) => {
    modules = modules.concat(routerModules)
  }

  let middlewares: SetupFn[] = []
  const registerMiddleware = (callbacks: RouterFn) => {
    middlewares.push((app: Express) => {
      app.use(callbacks)
    })
  }

  const listen = async (port: number, callbacks: Fn) => {
    await beforeLoadMiddle(app, middlewares)

    modules.forEach((setup) => {
      setup(app)
    })

    await afterLoadMiddle(app)
    app.listen(port, isFn(callbacks) ? callbacks : noop)
  }

  return { registerRouter, registerMiddleware, listen }
}
