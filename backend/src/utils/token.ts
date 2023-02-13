import jwt from "jsonwebtoken";

export const generateToken = ({ id, type }) => {
  return jwt.sign({ id, type }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

export const getToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "Bearer"
  ) {
    return req.headers.authorization.split(" ")[1];
  }
  return null;
};
