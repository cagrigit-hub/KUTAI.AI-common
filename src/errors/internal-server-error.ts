import { CustomError } from "./custom-error";

export class InternalServerError extends CustomError {
  statusCode = 500;
  importance = 1;
  constructor() {
    super("Internal Server Error");

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [{ message: "Internal Server Error" }];
  }
}
