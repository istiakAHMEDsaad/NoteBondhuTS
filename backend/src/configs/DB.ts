import mongoose from "mongoose";
import { ENV } from "./ENV";

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error connecting to db:", error.message);
    } else {
      console.error("An unknown error occurred during DB connection", error);
    }
    process.exit(1);
  }
}
