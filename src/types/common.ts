import { User } from "@prisma/client";
import { Request, Response, NextFunction } from "express";

export type ControllerType = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<void>;

export interface AuthenticatedRequest extends Request {
  user?: User;
}
