import "reflect-metadata";
import { DataSource } from "typeorm";

// entity imports
import { Todo, User } from "../entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "containers-us-west-195.railway.app",
  port: 6091,
  username: "postgres",
  password: "hGCer478d7QRN64MiMYJ",
  database: "railway",
  synchronize: true,
  logging: false,
  entities: [User, Todo],
  migrations: [],
  subscribers: [],
});
