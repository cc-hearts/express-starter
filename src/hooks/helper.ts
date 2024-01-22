export interface RegisterHookFactory {
  useBody<T>(initialValue: Partial<T>): T;
  useSuccessResponse<T>(message: string, data?: T | null): void;
  useThrowServiceError(message: string): void;
  useForbidden(message: string): void;
  useHeader<T extends keyof Headers | string>(...args: T[]): string[];
}
