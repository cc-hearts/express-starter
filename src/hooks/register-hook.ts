import type { fn } from '@cc-heart/utils/helper'
import type { Request, Response } from 'express'
import type { RegisterHookFactory } from './helper'

export const hookMap = new Map<keyof RegisterHookFactory, fn>()

export function registerHook(
  name: keyof RegisterHookFactory,
  fn: (req: Request, res: Response, ...rest: any[]) => any
) {
  hookMap.set(name, fn)
}
