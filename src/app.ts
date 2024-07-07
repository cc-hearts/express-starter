import express, { type Express } from 'express'
import './hooks/index.js'
import { afterLoadMiddle, beforeLoadMiddle } from './middleware/index.js'
import { setupModules } from './modules/index.js'
;(async () => {
  const app: Express = express()

  beforeLoadMiddle(app)

  setupModules(app)

  afterLoadMiddle(app)

  const port = 3000
  app.listen(port, () => {
    console.log('Server is running on port ', port)
  })
})()
