import { config } from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";

config();
const app = express();

//using routes
import userRouter from "./routes/user.js";

app.use("/api/v1/user", userRouter);

//using error middleware
app.use(errorMiddleware);

export default app;
