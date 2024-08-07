import { getCurrentTimeISOString } from '@cc-heart/utils'
import type { Request, Response } from 'express'
import { registerHook } from '../utils/register-hook'

registerHook(
  'useSuccessResponse',
  <T>(_req: Request, res: Response, message: string, data: T | null = null) => {
    res.json({
      code: 200,
      message,
      timestamp: getCurrentTimeISOString(),
      data
    })
  }
)
