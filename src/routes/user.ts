import express from "express";
import { createUser } from "../controllers/user.js";

const router = express.Router();

router.route("/create").get(createUser);

export default router;
