import express from 'express';
import userRoutes from './api/userRoutes';
import Profilerouter from './api/updateProfile';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/profile',Profilerouter);

export default routes;
