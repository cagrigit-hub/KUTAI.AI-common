import { currentUser } from "./current-user-middleware";
import { errorHandler } from "./error-handler-middleware";
import { isAdminMiddleware } from "./is-admin-middleware";

const middlewares = {
  currentUser,
  errorHandler,
  isAdminMiddleware,
};

export default middlewares;
