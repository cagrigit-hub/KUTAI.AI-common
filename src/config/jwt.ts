import { app_env } from "./env";

export const jwt_config = {
  accessSecret: app_env.JWT_ACCESS_SECRET,
  refreshSecret: app_env.JWT_REFRESH_SECRET,
  accessExpiresIn: "1d",
  refreshExpiresIn: "14d",
};
