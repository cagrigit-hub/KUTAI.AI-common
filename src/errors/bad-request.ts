import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode = 400;
  importance = 1;
  constructor(public errors: ValidationError[]) {
    super("Bad Request");

    // Only because we are extending a built-in class
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors() {
    return this.errors.map((error) => ({
      message: error.msg,
      type: error.type,
    }));
  }
}
