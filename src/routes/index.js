import express from 'express';
import userRoutes from './api/userRoutes';
import driverToBusRoute from './api/driverToBusRoute'

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/driverstobuses',driverToBusRoute);

export default routes;
