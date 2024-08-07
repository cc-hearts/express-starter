import { getCurrentTimeISOString } from '@cc-heart/utils'
import type { Request, Response } from 'express'
import { registerHook } from '../utils/register-hook'

registerHook(
  'useThrowServiceError',
  (_req: Request, res: Response, message: string) => {
    res.json({
      code: 500,
      timestamp: getCurrentTimeISOString(),
      message
    })
  }
)
