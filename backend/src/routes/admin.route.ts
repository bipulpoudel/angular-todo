import express from "express";

import { analytics, users } from "../controllers/admin.controller";
import { admin } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/users").get(admin, users);
router.route("/users/:id").get(admin, analytics);

export default router;
