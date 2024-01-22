import { createErrorHandler } from "../utils/create-error-handler";
import { createRouterFactory } from "../utils/create-router";

const { router, setup } = createRouterFactory('/user');
export { setup as AppSetup };


router.get('/', createErrorHandler(async (_, res) => {
  res.send('Hello World!');
}))
