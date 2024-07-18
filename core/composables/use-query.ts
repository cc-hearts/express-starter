import type { Request, Response } from 'express'
import { registerHook } from '../utils/register-hook'

registerHook('useQuery', <T>(req: Request, _res: Response, initialValue: T) => {
  return req.params || initialValue
})
