import express from 'express';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerDoc from './data.json';
import cors from 'cors';
import swaggerDocument from './documentation/index'
import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import middleware from 'i18next-http-middleware';
import cookieParser from 'cookie-parser';

import globalErrorHandler from './controllers/errorController';
import routes from './routes/index';
import 'dotenv/config';

const server = express();
server.listen(process.env.PORT || 3000);
server.use(cors());
server.use(express.json());

i18next
    .use(Backend)
    .use(middleware.LanguageDetector)
    .init({
      fallbackLng: 'en',
      backend: {
        loadPath: './locales/{{lng}}/translation.json',
      },
    });

server.use(middleware.handle(i18next));
server.use(express.json());


server.get('/api/v1', (req, res) => {
  res.status(200).json({
    message: req.t('welcome_message'),
  });
});

server.use(morgan("dev"));
server.use(cors());
server.use(cookieParser())

server.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc, { explorer: true }));

// server.use(forgotPasssword)
// server.use(resetPassword)

server.use(cors());
server.use(express.json());

server.use('/api/v1/', routes);


// ERROR HANDLING MIDDLEWARE
server.use(globalErrorHandler);

// eslint-disable-next-line max-len
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {
  swaggerOptions: {
    docExpansion: 'none',
    persistAuthorization: true,
  },
}, swaggerDoc,{explorer: true}));
server.use(morgan('dev'));
server.use('*', (req, res, next) => {
  res.status(404).json({error: 'NOT FOUND'});
});
export default server;
