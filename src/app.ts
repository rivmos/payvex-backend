import { config } from "dotenv";
import express from "express";

config();
const app = express();

//using routes
import userRouter from "./routes/user.js";

app.use("/api/v1/user", userRouter);

export default app;
