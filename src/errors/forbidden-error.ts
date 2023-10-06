import { CustomError } from "./custom-error";

export class ForbiddenError extends CustomError {
  statusCode = 403;
  importance = 1;
  constructor() {
    super("You are not authorized to perform this action");
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
