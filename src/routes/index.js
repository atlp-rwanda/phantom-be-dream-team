import express from 'express';
import userRoutes from './api/userRoutes';
import resetRoute from './api/resetRoute'
import Profilerouter from './api/updateProfile';
import simulateRouter from './api/busInRoad';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/users1', resetRoute);
routes.use('/profile',Profilerouter);
routes.use('/simulate',simulateRouter);

export default routes;
