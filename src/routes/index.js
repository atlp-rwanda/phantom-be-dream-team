import express from 'express';
import userRoutes from './api/userRoutes';
import driverToBusRoute from './api/driverToBusRoute'
import resetRoute from './api/resetRoute'
import busRoute from './api/busRoute'
import Profilerouter from './api/updateProfile';
import simulateRouter from './api/busInRoad';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/driverstobuses',driverToBusRoute);
routes.use('/users1', resetRoute);
routes.use('/buses', busRoute)
routes.use('/profile',Profilerouter);
routes.use('/simulate',simulateRouter);

export default routes;
