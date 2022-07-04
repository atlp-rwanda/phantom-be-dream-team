import express from 'express';
import userRoutes from './api/userRoutes';
import busRoute from './api/busRoute'
import Profilerouter from './api/updateProfile';
import simulateRouter from './api/busInRoad';
import permissionsRouter from './api/Permissions.routes'
import roleRouter from './api/roles.routes';

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/buses', busRoute)
routes.use('/profile',Profilerouter);
routes.use('/simulate',simulateRouter);
routes.use('/permissions', permissionsRouter);
routes.use('/roles', roleRouter)

export default routes;
