import express from "express";
import { config } from "dotenv";

config();
const app = express();

//using routes
import userRouter from "./routes/user.js";

app.use("/api/v1/user", userRouter);

export default app;
