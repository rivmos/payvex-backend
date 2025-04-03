import { config } from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config();
const app = express();

//using middlewares
app.use(express.json()); // Parse JSON data
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
app.use(
  cors({
    origin: process.env.PUBLIC_DOMAIN, // Allow requests from this origin
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  }),
);
app.use(cookieParser());

//using routes
import userRouter from "./routes/user.js";
import tenantRouter from "./routes/tenant.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/tenant", tenantRouter);

//using error middleware
app.use(errorMiddleware);

export default app;
