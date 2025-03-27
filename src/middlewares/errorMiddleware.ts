import type { NextFunction, Response, Request } from "express";

class ErrorHandler extends Error {
  constructor(
    public message: string,
    public statusCode: number,
  ) {
    super(message);
    this.statusCode = statusCode;
  }
}

export default ErrorHandler;

export const errorMiddleware = (
  err: ErrorHandler,
  req: Request,
  res: Response,
  _next: NextFunction, //variable with _ is not showing the es lint warning confiure in the configuration
) => {
  err.message ||= "Internal server error";
  err.statusCode ||= 500;

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
