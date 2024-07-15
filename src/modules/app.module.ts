import { createErrorHandler } from '@/utils/create-error-handler'
import { createRouterFactory } from '@/utils/create-router'
import { useContext } from '@/hooks/use-context'
const { router, setup } = createRouterFactory('/user')
export { setup as AppSetup }

router.post(
  '/',
  createErrorHandler(async () => {
    const { useSuccessResponse } = useContext() || {}
    useSuccessResponse('ok')
  })
)
