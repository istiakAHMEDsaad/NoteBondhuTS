import mongoose from "mongoose";
import { ENV } from "./ENV";

export async function connectDB() {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log("Database is connected");
  } catch (error) {
    console.log("Error connecting to db", error);
    process.exit(1);
  }
}
