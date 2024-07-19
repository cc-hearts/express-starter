import express, { type Express } from 'express'
import { afterLoadMiddle, beforeLoadMiddle } from './middlewares/index'
import type { Fn } from '@cc-heart/utils/helper'
import { isFn, noop } from '@cc-heart/utils'
import type { RouterFn, SetupFn } from './types/helper'

export * from './composables/index'
export * from './utils/index'
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

  const init = async () => {
    await beforeLoadMiddle(app, middlewares)

    modules.forEach((setup) => {
      setup(app)
    })

    await afterLoadMiddle(app)
  }
  const listen = async (port: number, callbacks: Fn) => {
    await init()
    app.listen(port, isFn(callbacks) ? callbacks : noop)
  }

  return { registerRouter, registerMiddleware, listen, app, _init: init }
}
