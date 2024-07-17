import { useContext } from '@/hooks/use-context'
import { useNext } from '@/utils/create-error-handler'
import { createRouterFactory } from '@/utils/create-router'
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
    // throw new Error('error')
    useSuccessResponse('hello world')
  }
)
