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
  () => {
    const { useSuccessResponse } = useContext() || {}
    useSuccessResponse('hello world')
  }
)
