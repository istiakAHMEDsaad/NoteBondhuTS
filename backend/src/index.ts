import express, { Application, Request, Response } from "express";
import { ENV } from "./configs/ENV";
import { connectDB } from "./configs/DB";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";

const app: Application = express();

// middleware
app.use(cors());
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({
    name: "NoteBondhuTS",
    message: "This is the backend server for NoteBondhuTS",
  });
});

app.listen(ENV.PORT, async () => {
  await connectDB();
  console.log(`Server is running on http://localhost:${ENV.PORT}`);
});
