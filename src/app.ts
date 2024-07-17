import { create, Logger } from '../core/index'
import routers from './modules/index'

;(async () => {
  const { listen, registerRouter } = await create()
  registerRouter(routers)

  const port = 3000

  listen(port, () => {
    Logger.Debug(`Server is running on port: ${port}`)
  })
})()
