import jwt_decode from "jwt-decode";

import { User } from "../entity";
import { getToken, sendError } from "../utils";

export const auth = async (req, res, next) => {
  const token = await getToken(req);

  if (!token) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "User is not logged in. Login to continue.",
    });
  }

  try {
    const decoded: any = jwt_decode(token);

    if (decoded.id === undefined) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "Invalid token. Login to continue.",
      });
    }

    const user = await User.findOneBy({ id: decoded.id });

    if (!user) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "User not found. Login to continue.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Invalid token. Login to continue.",
    });
  }
};

export const admin = async (req, res, next) => {
  const token = await getToken(req);

  if (!token) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "User is not logged in. Login to continue.",
    });
  }

  try {
    const decoded: any = jwt_decode(token);

    if (decoded.id === undefined) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "Invalid token. Login to continue.",
      });
    }

    const user = await User.findOneBy({ id: decoded.id });

    if (!user) {
      return sendError({
        res,
        status: 401,
        data: null,
        message: "User not found. Login to continue.",
      });
    }

    if (user.type !== "admin") {
      return sendError({
        res,
        status: 403,
        data: null,
        message: "You are not authorized to access this route.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return sendError({
      res,
      status: 401,
      data: null,
      message: "Invalid token. Login to continue.",
    });
  }
};
