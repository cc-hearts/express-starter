import type { NextFunction, Request, Response, Express } from 'express'

export interface RegisterHookFactory {
  useBody: <T>(initialValue: Partial<T>) => T
  useQuery: <T>(initialValue: Partial<T>) => T
  useSuccessResponse: <T>(message: string, data?: T | null) => void
  useThrowServiceError: (message: string) => void
  useForbidden: (message: string) => void
  useHeader: <T extends keyof Headers | string>(...args: T[]) => string[]
}

export type RouterFn = (req: Request, res: Response, next: NextFunction) => void

export type SetupFn = (app: Express) => void
