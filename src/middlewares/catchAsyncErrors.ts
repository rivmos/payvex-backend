import { Request, Response, NextFunction } from "express";
import { ControllerType } from "../types/functionTypes.js";

const catchAsyncErrors = (passedFunction: ControllerType) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(passedFunction(req, res, next)).catch(next);
  };
};

export default catchAsyncErrors;
