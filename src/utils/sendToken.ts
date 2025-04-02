import { User } from "@prisma/client";
import { CookieOptions, type Response } from "express";
import { getJwtAccessToken, getJwtRefreshToken } from "./jwtToken.js";

export const sendToken = (
  res: Response,
  user: User,
  message: string,
  statusCode = 200,
) => {
  setAccessTokenCookie(res, user);
  setRefreshTokenCookie(res, user);

  res.status(statusCode).json({
    success: true,
    message,
    user,
  });
};

export const setAccessTokenCookie = (res: Response, user: User) => {
  const accessToken = getJwtAccessToken(user);

  const options: CookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 15 * 60 * 1000),
    secure: true,
    sameSite: "none",
  };
  return res.cookie("token", accessToken, options);
};

export const setRefreshTokenCookie = (res: Response, user: User) => {
  const refreshToken = getJwtRefreshToken(user);

  const options: CookieOptions = {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    secure: true,
    sameSite: "none",
  };

  return res.cookie("refreshToken", refreshToken, options);
};
