import { UnauthorizedError } from "./unauthorized-error";
import { errorHandler } from "../middlewares/error-handler-middleware";
import { AlreadyExistsError } from "./already-exists-error";
import { BadRequestError } from "./bad-request-error";
import { CustomError } from "./custom-error";
import { ForbiddenError } from "./forbidden-error";
import { NotFoundError } from "./not-found-error";
import { RequestValidationError } from "./request-validation-error";

const errors = {
  UnauthorizedError,
  AlreadyExistsError,
  BadRequestError,
  CustomError,
  ForbiddenError,
  NotFoundError,
  RequestValidationError,
  errorHandler,
};

export default errors;
