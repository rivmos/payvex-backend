import type { NextFunction, Request, Response } from "express";
import { prisma } from "../config/database.js";
import catchAsyncErrors from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";

export const createTenant = catchAsyncErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, user } = req.body;

    if (!name || !user || !user.id)
      return next(new ErrorHandler("Please fill all fields", 400));

    const tenantExist = await prisma.tenant.findFirst({
      where: {
        name: {
          // Case-insensitive comparison
          equals: name,
          mode: "insensitive",
        },
      },
    });

    if (tenantExist)
      return next(
        new ErrorHandler(
          "Tenant name is already taken. Try another name.",
          400,
        ),
      );

    await prisma.tenant.create({
      data: {
        name,
        created_by: user.id,
      },
    });

    res.status(201).json({
      success: true,
      message: "Tenant created successfully",
    });
  },
);
