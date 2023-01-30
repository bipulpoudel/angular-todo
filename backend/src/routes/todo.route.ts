import express from "express";

import { create, list } from "../controllers/todo.controller";

const router = express.Router();

// private routes
router.route("/list").get(list);
router.route("/create").post(create);
// router.route("/register").post(register);

export default router;
