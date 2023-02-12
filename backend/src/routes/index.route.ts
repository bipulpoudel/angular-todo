import auth from "./auth.route";
import todo from "./todo.route";

const rootRoutes = (app) => {
  app.use("/auth", auth);
  app.use("/todos", todo);
};

export default rootRoutes;
