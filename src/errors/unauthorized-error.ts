import { CustomError } from "./custom-error";

export class UnauthorizedError extends CustomError {
  statusCode = 401;
  importance = 1;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message,
        refresh_token_needed: this.message === "Token expired",
      },
    ];
  }
}
