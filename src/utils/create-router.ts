import express, { Express } from 'express';
export function createRouterFactory(prefix: string = '/') {
  const router = express.Router();

  const setup = (app: Express) => {
    app.use(prefix, router);
  };

  return { router, setup };
}
