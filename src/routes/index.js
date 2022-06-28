import express from 'express';
import userRoutes from './api/userRoutes';
<<<<<<< HEAD
import busRoute from './api/busRoute'
=======
import Profilerouter from './api/updateProfile';
import simulateRouter from './api/busInRoad';
>>>>>>> origin

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
<<<<<<< HEAD
routes.use('/buses', busRoute)
=======
routes.use('/profile',Profilerouter);
routes.use('/simulate',simulateRouter);
>>>>>>> origin

export default routes;
