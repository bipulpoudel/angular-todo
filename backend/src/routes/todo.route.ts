import express from "express";

import { create, list, translate } from "../controllers/todo.controller";

const router = express.Router();

// private routes
router.route("/list").get(list);
router.route("/create").post(create);
router.route("/translate/:id").post(translate);
// router.route("/register").post(register);

export default router;
