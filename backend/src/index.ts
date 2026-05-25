import express, { Application, Request, Response } from "express";
import { PORT } from "./utils/ENV";

const app: Application = express();

// middleware

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.json({
    name: "NoteBondhuTS",
    message: "This is the backend server for NoteBondhuTS",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
