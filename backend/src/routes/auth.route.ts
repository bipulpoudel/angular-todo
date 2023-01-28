import express from "express";

import { login, register } from "../controllers/auth.controller";

// import { auth } from "../middlewares/authMiddleware";

const router = express.Router();

// public routes
router.route("/login").post(login);
router.route("/register").post(register);

// //private routes
// router.route("/logout").get(auth, logout);

export default router;
