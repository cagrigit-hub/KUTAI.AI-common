import { app_env } from "src/config/env";
// config/database.ts
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(app_env.MONGO_URI, {
      autoIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectDB;
