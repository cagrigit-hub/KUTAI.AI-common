import { Response } from "express";
import { CustomError } from "./custom-error";

// TODO: More method will be added. To handle specific cases.

export class ErrorHandler {
  public async handleError(err: Error, res: Response) {
    this.logError(err);
    this.respondError(err, res);
  }

  public logError(err: Error) {
    if (err instanceof CustomError) {
      console.log(err.serializeErrors());
    } else {
      console.error("Not a custom type:", err);
    }
  }
  public respondError(err: Error, res: Response) {
    if (err instanceof CustomError) {
      if (err.importance >= 3) {
        this.handleImportantErrors(err);
      }
      res.status(err.statusCode).send({ errors: err.serializeErrors() });
    } else {
      res.status(400).send({
        errors: [{ message: "Something went wrong" }],
      });
    }
  }
  public handleImportantErrors(err: Error) {
    console.log("important error", err);
  }
}
