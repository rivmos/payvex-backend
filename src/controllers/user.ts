import { prisma } from "../config/database.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import type { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import ErrorHandler from "../middlewares/error.js";

export const createUser = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return next(new ErrorHandler("Please fill all fields", 400));

    const emailLower = email.toLowerCase();

    const userExist = await prisma.user.findFirst({
      where: {
        email: emailLower,
      },
    });

    if (userExist)
      return next(
        new ErrorHandler(
          "User already exist with email. Try login instead.",
          400,
        ),
      );

    const hashedPassword = await bcrypt.hash(password, 14);

    await prisma.user.create({
      data: {
        email: emailLower,
        name,
        password: hashedPassword,
        super_admin: false,
      },
    });

    res.status(201).json({
      succcess: true,
      message: "User created successfully",
    });
  },
);
