import type { NextFunction, Response } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import catchAsyncErrors from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import { prisma } from "../config/database.js";
import type { AuthenticatedRequest } from "../types/common.js";

export const isAuthenticated = catchAsyncErrors(
  async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const { token } = req.cookies;
    if (!token) return next(new ErrorHandler("Please login first", 401));

    const decodedToken = jwt.verify(
      token,
      process.env.JWT_SECRET as string,
    ) as JwtPayload;

    if (!decodedToken)
      return next(new ErrorHandler("Invalid or expired token", 401));

    const user = await prisma.user.findFirst({
      where: {
        id: decodedToken.userId,
      },
    });

    if (!user) return next(new ErrorHandler("Please login first", 400));

    req.user = user;
    next();
  },
);
