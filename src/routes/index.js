import express from 'express';
import userRoutes from './api/userRoutes';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);

export default routes;
