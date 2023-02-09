import express from "express";

import {
  create,
  remove,
  list,
  translate,
} from "../controllers/todo.controller";

const router = express.Router();

// private routes
router.route("/list").get(list);
router.route("/create").post(create);
router.route("/translate/:id").post(translate);
router.route("/delete/:id").delete(remove);

export default router;
