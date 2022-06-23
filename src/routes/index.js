import express from 'express';
import userRoutes from './api/userRoutes';
import bustorouteRoutes from './api/bustorouteRoutes';
// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/bustoroutes',bustorouteRoutes);
export default routes;
