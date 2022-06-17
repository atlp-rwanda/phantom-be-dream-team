import express from 'express'
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import swaggerDoc from "./data.json";
import cors from "cors";
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import cookieParser from 'cookie-parser';

import userRoute from './routes/updateProfile'

i18next
  .use(Backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    backend: {
      loadPath: "./locales/{{lng}}/translation.json",
    },
  });

const server=express();
server.use(middleware.handle(i18next));
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({
    success: req.t('success'),
    message: req.t('message'),
  });
});

server.use(morgan("dev"));
server.use(cors());
server.use(cookieParser())

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, { explorer: true }));
// server.use("*", (req, res, next) => {
// 	res.status(404).json({ error: "NOT FOUND", });
// });
server.use("/profile",userRoute);

export default server;
