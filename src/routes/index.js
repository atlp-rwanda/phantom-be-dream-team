import express from 'express';
import userRoutes from './api/userRoutes';
import busRoutes from './api/routesRoute';
// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/routes', busRoutes);

export default routes;
