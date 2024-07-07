import type { Express } from 'express';
import express from 'express'
export function createRouterFactory(prefix: string = '/') {
  const router = express.Router()

  const setup = (app: Express) => {
    app.use(prefix, router)
  }

  return { router, setup }
}
