import * as Yup from "yup";

import { Todo, User } from "../entity";
import { errorHandler, sendError, sendSuccess, translateText } from "../utils";

// @desc   Create todo for user
// @route   POST /todos/create
// @access  Private
export const create = async (req, res) => {
  const { title } = req.body;

  const schema = Yup.object().shape({
    title: Yup.string().required("Title is a required field"),
  });

  try {
    await schema.validate({
      title,
    });

    const user = await User.findOneBy({ id: req.user.id });

    const todo = await Todo.create({
      title,
      user,
    });

    todo.save();

    return sendSuccess({
      res,
      message: "Todo has been created successfully.",
      data: {
        todo: {
          title: todo.title,
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
      where: { id: req.user.id },
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

// @desc   Delete todo
// @route   DELETE /todos/delete/:id
// @access  Private

export const remove = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findOneBy({
      id,
    });

    if (!todo)
      return sendError({ res, status: 404, message: "Todo not found." });

    await todo.remove();

    return sendSuccess({
      res,
      message: "Todo has been deleted successfully.",
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc   Translate todo
// @route   POST /todos/translate/:id
// @access  Private

export const translate = async (req, res) => {
  const { id } = req.params;
  const { language } = req.body;

  const schema = Yup.object().shape({
    language: Yup.string().required("Language is a required field"),
  });

  try {
    await schema.validate({
      language,
    });

    const todo = await Todo.findOne({
      where: { id },
    });

    if (!todo)
      return sendError({ res, status: 404, message: "Todo not found." });

    const translation = await translateText({
      text: todo.title,
      to: language,
    });

    return sendSuccess({
      res,
      message: "Todo has been translated successfully.",
      data: {
        translation: translation,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
