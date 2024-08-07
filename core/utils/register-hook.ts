import type { Fn } from '@cc-heart/utils/helper'
import type { Request, Response } from 'express'
import type { RegisterHookFactory } from '../types/helper'

export const hookMap = new Map<keyof RegisterHookFactory, Fn>()

export function registerHook(
  name: keyof RegisterHookFactory,
  fn: (req: Request, res: Response, ...rest: any[]) => any
) {
  hookMap.set(name, fn)
}
