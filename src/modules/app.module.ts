import { createRouterFactory, useNext, useContext } from '../../core/index'

import { sleep } from '@cc-heart/utils'
const { router, setup } = createRouterFactory('/user')
export { setup as AppSetup }

router.get(
  '/',
  async () => {
    const next = useNext()
    await sleep(200)
    next()
  },
  async () => {
    const { useSuccessResponse } = useContext() || {}
    await sleep(200)
    useSuccessResponse('hello world')
  }
)
