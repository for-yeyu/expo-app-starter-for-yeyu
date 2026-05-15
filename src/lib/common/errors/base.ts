export abstract class BaseError extends Error {
  abstract name: string;
  readonly data: unknown;

  constructor(message: string, data?: unknown) {
    super(message);
    this.data = data;
  }
}
