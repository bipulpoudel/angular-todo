import express from "express";

import { login, makeAdmin, register } from "../controllers/auth.controller";
import { auth } from "../middlewares/auth.middleware";

const router = express.Router();

// public routes
router.route("/login").post(login);
router.route("/register").post(register);

// private routes
router.route("/make-admin").put(auth, makeAdmin);

export default router;
