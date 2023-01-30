import * as Yup from "yup";
import bcrypt from "bcryptjs";

import { IUser } from "../interfaces";
import { Todo, User } from "../entity";
import { errorHandler, generateToken, sendError, sendSuccess } from "../utils";

// @desc   Create todo for user
// @route   POST /todos/create
// @access  Private
export const create = async (req, res) => {
  const { title, description } = req.body;

  const schema = Yup.object().shape({
    title: Yup.string().required("Title is a required field"),
  });

  try {
    await schema.validate({
      title,
      description,
    });

    const user = await User.findOneBy({ id: 1 });

    const todo = await Todo.create({
      title,
      description,
      user,
    });

    todo.save();

    return sendSuccess({
      res,
      message: "Todo has been created successfully.",
      data: {
        todo: {
          title: todo.title,
          description: todo.description,
        },
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc   List all todos for user
// @route   GET /todos/list
// @access  Private

export const list = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { id: 1 },
      relations: {
        todos: true,
      },
    });

    if (!user)
      return sendError({ res, status: 404, message: "User not found." });

    return sendSuccess({
      res,
      message: "Todos has been fetched successfully.",
      data: {
        todos: user.todos,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
