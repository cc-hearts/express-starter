import { useConfig } from '../hooks/use-config'
import type { Express, Request, Response } from 'express'
import type { Fn } from '@cc-heart/utils/helper'

export async function allowCrossDomain(_: Request, res: Response, next: Fn) {
  const cfg = await useConfig()

  if (cfg.allowCROS) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header(
      'Access-Control-Allow-Headers',
      'Authorization,X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method'
    )
    res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PATCH, PUT, DELETE'
    )
    res.header('Allow', 'GET, POST, PATCH, OPTIONS, PUT, DELETE')
  }

  next()
}

export function setupAllowCrossDomain(app: Express) {
  app.use('*', allowCrossDomain)
}
