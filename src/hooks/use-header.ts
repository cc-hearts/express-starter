import { registerHook } from './register-hook.js';
import type { Request, Response } from 'express';


registerHook('useHeader', (req: Request, _res: Response, ...args: string[]) => {
  return args.map(arg => {
    return Reflect.get(req.headers, arg);
  })
})