import { asyncLocalStorage, map } from '../middleware/async-context'
import { useHookFactory } from './use-hook-factory'

export function useContext(): ReturnType<typeof useHookFactory> {
  const signal = asyncLocalStorage.getStore() as number
  const { req, res } = map.get(signal)
  return useHookFactory(req, res)
}
