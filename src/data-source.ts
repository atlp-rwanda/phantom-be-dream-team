import "reflect-metadata"
import { DataSource } from "typeorm"
import { Route } from "./entity/Route"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "test",
    database: "phantom",
    synchronize: true,
    logging: false,
    entities: [Route],
    migrations: [],
    subscribers: [],
})
