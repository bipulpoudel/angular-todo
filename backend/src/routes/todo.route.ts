import express from "express";

import {
  create,
  remove,
  list,
  translate,
} from "../controllers/todo.controller";
import { auth } from "../middlewares/auth.middleware";

const router = express.Router();

// private routes
router.route("/list").get(auth, list);
router.route("/create").post(auth, create);
router.route("/translate/:id").post(auth, translate);
router.route("/delete/:id").delete(auth, remove);

export default router;
