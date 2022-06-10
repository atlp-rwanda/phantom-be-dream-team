import express from 'express'
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./data.json";
import cors from "cors";

const server=express();
server.use(express.json());
server.get('/', (req, res) => {
	res.status(200).json({ success: true, message: "Welcome To Dream Team Phantom App" })
});


server.use(morgan("dev"));
server.use(cors());

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, { explorer: true }));
server.use("*", (req, res, next) => {
	res.status(404).json({ error: "NOT FOUND", });
});
export default server;
