import { Request, Response, NextFunction } from "express";

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;
