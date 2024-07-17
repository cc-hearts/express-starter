import { useHookFactory } from './use-hook-factory'
import { requestAsyncContext } from '../context/request-async-context'
import type { Request, Response } from 'express'

export function useContext(): ReturnType<typeof useHookFactory> {
  const { req, res } = requestAsyncContext.getContext() as {
    req: Request
    res: Response
  }
  return useHookFactory(req, res)
}
