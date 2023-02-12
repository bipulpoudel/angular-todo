import { Analytics, User } from "../entity";
import { errorHandler, sendError, sendSuccess } from "../utils";

// @desc   List all users
// @route   GET /admin/users
// @access  Private
export const users = async (req, res) => {
  try {
    const users = await User.find({});

    return sendSuccess({
      res,
      message: "Users has been fetched successfully.",
      data: {
        users: users,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};

// @desc   List all analytics
// @route   GET /admin/users/:id
// @access  Private
export const analytics = async (req, res) => {
  try {
    const user = await User.findOneBy({
      id: req.params.id,
    });

    if (!user) {
      return sendError({
        res,
        message: "User not found.",
        status: 404,
      });
    }

    const analytics = await Analytics.find({
      where: {
        userId: user.id.toString(),
      },
    });

    return sendSuccess({
      res,
      message: "Analytics has been fetched successfully.",
      data: {
        analytics: analytics,
      },
    });
  } catch (err) {
    errorHandler(res, err);
  }
};
