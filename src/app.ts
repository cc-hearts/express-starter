import express, { type Express } from 'express'
import './hooks/index.js'
import { afterLoadMiddle, beforeLoadMiddle } from './middleware/index.js'
import { setupModules } from './modules/index.js'
import { Logger } from './utils/logger.js'
;(async () => {
  const app: Express = express()

  await beforeLoadMiddle(app)

  setupModules(app)

  await afterLoadMiddle(app)

  const port = 3000
  app.listen(port, () => {
    Logger.Debug(`Server is running on port: ${port}`)
  })
})()
