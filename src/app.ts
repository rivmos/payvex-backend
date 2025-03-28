import { config } from "dotenv";
import express from "express";
import { errorMiddleware } from "./middlewares/error.js";

config();
const app = express();

//using middlewares
app.use(express.json());

//using routes
import userRouter from "./routes/user.js";
import tenantRouter from "./routes/tenant.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/tenant", tenantRouter);

//using error middleware
app.use(errorMiddleware);

export default app;
