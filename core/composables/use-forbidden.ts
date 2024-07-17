import { getCurrentTimeISOString } from '@cc-heart/utils'
import type { Request, Response } from 'express'
import { registerHook } from '../utils/register-hook'

registerHook(
  'useForbidden',
  (_req: Request, res: Response, message: string) => {
    res.json({
      code: 401,
      timestamp: getCurrentTimeISOString(),
      message
    })
  }
)
