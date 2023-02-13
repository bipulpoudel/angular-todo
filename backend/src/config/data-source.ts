import "reflect-metadata";
import { DataSource } from "typeorm";

// entity imports
import { Todo, User, Analytics } from "../entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.HOST,
  port: Number(process.env.DATABASE_PORT) || 5432,
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Todo, Analytics],
  migrations: [],
  subscribers: [],
});
