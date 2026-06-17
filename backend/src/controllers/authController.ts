import { Request, Response } from "express";

export function Signup(req: Request, res: Response) {
  res.status(201).json({ message: "Success" });
}
