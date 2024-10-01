import type { ZodType } from 'zod'

export function useFieldsValidator(value: unknown, zodInstance: ZodType) {
  const res = zodInstance.safeParse(value)
  let parser
  if (res.success) {
    parser = res.data
  } else {
    const failFieldsFlat = res.error.flatten()
    parser = failFieldsFlat.fieldErrors
  }

  return [res.success, parser] as const
}
