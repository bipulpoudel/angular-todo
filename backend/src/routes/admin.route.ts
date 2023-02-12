import express from "express";

import { analytics, users } from "../controllers/admin.controller";
import { auth } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/users").get(auth, users);
router.route("/users/:id").get(auth, analytics);

export default router;
