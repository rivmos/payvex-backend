import type { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { prisma } from "../config/database.js";

const JWT_SECRET = process.env.JWT_SECRET!;
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET!;

export const getJwtAccessToken = (user: User) => {
  return jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: "15m" });
};

export const getJwtRefreshToken = async (user: User) => {
  const refreshToken = jwt.sign({ userId: user.id }, JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  await prisma.refreshToken.create({
    data: {
      token: refreshToken,
      userId: user.id,
      expired_at: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiry
    },
  });

  return refreshToken;
};
