import auth from "./auth.route";
import todo from "./todo.route";
import admin from "./admin.route";

const rootRoutes = (app) => {
  app.use("/auth", auth);
  app.use("/todos", todo);
  app.use("/admin", admin);
};

export default rootRoutes;
