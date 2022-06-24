import express from 'express';
import userRoutes from './api/userRoutes';
import resetRoute from './api/resetRoute'

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/users1', resetRoute);

export default routes;
