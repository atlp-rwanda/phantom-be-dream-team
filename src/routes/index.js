import express from 'express';
import userRoutes from './api/userRoutes';
import busRoute from './api/busRoute'

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/buses', busRoute)

export default routes;
