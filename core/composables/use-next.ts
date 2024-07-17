import type { NextFunction } from 'express'
import { nextAsyncContext } from '../context/next-async-context'

export function useNext(): NextFunction {
  return nextAsyncContext.getContext()
}
