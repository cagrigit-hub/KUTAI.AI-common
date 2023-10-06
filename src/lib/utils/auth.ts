import jwt from "jsonwebtoken";
import { jwt_config } from "../../config/jwt";

export const validateAccessToken = (token: string): boolean => {
  try {
    jwt.verify(token, jwt_config.accessSecret);
    return true;
  } catch (error) {
    return false;
  }
};

export const validateRefreshToken = (token: string): boolean => {
  try {
    jwt.verify(token, jwt_config.refreshSecret);
    return true;
  } catch (error) {
    return false;
  }
};
