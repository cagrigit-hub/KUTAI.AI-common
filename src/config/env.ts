import dotenv from "dotenv";
dotenv.config();

export const app_env = {
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET || "supersecret",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || "supersecret",
  PORT: process.env.PORT || 9999,
  MONGO_URI: process.env.MONGO_URI || "mongodb://localhost:27017/yummm",
};
