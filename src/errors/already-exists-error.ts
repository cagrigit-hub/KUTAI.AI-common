import { CustomError } from "./custom-error";

export class AlreadyExistsError extends CustomError {
  statusCode = 409;
  importance = 1;
  constructor(message: string) {
    super(message + " already exists");
    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, AlreadyExistsError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
