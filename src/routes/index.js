import express from 'express';
import userRoutes from './api/userRoutes';
import busRoutes from './api/routesRoute';
import busRoute from './api/busRoute';
import Profilerouter from './api/updateProfile';
import simulateRouter from './api/busInRoad';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/routes', busRoutes);
routes.use('/profile', Profilerouter);
routes.use('/simulate', simulateRouter);
routes.use('/buses', busRoute);

export default routes;
