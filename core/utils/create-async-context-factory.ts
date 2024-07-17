import { AsyncLocalStorage } from 'async_hooks'
import { randomUUID } from 'crypto'

export function createAsyncContextFactory() {
  // map uuid -> next
  const map = new Map<string, any>()
  const asyncLocalStorage = new AsyncLocalStorage()

  function getUniqueId() {
    let id = randomUUID()
    while (map.has(id)) {
      id = randomUUID()
    }
    return id
  }

  function setContext<T>(key: string, value: T) {
    map.set(key, value)
  }

  function removeContext(key: string) {
    map.delete(key)
  }

  function getContext<T>() {
    return map.get(asyncLocalStorage.getStore() as string) as T
  }

  return {
    getUniqueId,
    setContext,
    removeContext,
    getContext,
    asyncLocalStorage
  }
}
