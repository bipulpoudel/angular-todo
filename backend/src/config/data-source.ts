import "reflect-metadata";
import { DataSource } from "typeorm";

// entity imports
import { Todo, User, Analytics } from "../entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "containers-us-west-144.railway.app",
  port: 6621,
  username: "postgres",
  password: "kewq92P4sclsSBGEErhS",
  database: "railway",
  synchronize: true,
  logging: false,
  entities: [User, Todo, Analytics],
  migrations: [],
  subscribers: [],
});
