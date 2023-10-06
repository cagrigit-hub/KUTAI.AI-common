import type { NextFunction, Request, Response } from "express";
import { ErrorHandler } from "../errors/error-handler";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const handler = new ErrorHandler();
  handler.handleError(err, res);
};
