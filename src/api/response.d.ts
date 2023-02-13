export default interface BaseResponse<T> {
  status: number;
  result: T | null;
  errorDescription?: string | null;
}
