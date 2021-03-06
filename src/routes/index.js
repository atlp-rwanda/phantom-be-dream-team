import express from 'express';
import userRoutes from './api/userRoutes';
import busToRoute_Routes from './api/busToRoute_Routes';
import driverToBusRoute from './api/driverToBusRoute'
import busRoutes from './api/routesRoute';
import busRoute from './api/busRoute';
import resetRoute from './api/resetRoute';
import Profilerouter from './api/updateProfile';
import simulateRouter from './api/busInRoad';
import listOfAllBuses from './api/listOfAllBusesRoute';
import permissionsRouter from './api/Permissions.routes'
import roleRouter from './api/roles.routes';
import assignRolesToPermissionsRoute from './api/assignRolesToPermissionsRoute'

// eslint-disable-next-line new-cap
const routes = express.Router();

routes.use('/users', userRoutes);
routes.use('/profile',Profilerouter);
routes.use('/simulate',simulateRouter);
routes.use('/permissions', permissionsRouter);
routes.use('/roles', roleRouter)
routes.use('/bustoroutes',busToRoute_Routes);
routes.use('/driverstobuses',driverToBusRoute);
routes.use('/routes', busRoutes);
routes.use('/profile', Profilerouter);
routes.use('/buses', busRoute);
routes.use('/users1', resetRoute);
routes.use('/listbuses',listOfAllBuses)
routes.use('/roletopermission',assignRolesToPermissionsRoute)


export default routes;
