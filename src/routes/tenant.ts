import express from "express";
import { createTenant } from "../controllers/tenant.js";

const router = express.Router();

router.route("/create").post(createTenant);

export default router;
