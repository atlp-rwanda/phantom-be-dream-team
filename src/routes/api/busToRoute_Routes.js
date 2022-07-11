import express from 'express';
import {AssignBusToRoute,AllBusesWithRoutes,AllBusesWithNoRoutes,unAssignBusToRoute} from '../../controllers/driverToBusController';
// import models from "../../models"
// import { checkAdmin } from "../../middleware/check";
// import {paginatedResult} from "../../middleware/driverToBusPagination"

const router = express.Router();


  router.post(
    '/assign/bus/:busId/route/:routeId',
    AssignBusToRoute
  );

  router.get(
    '/all/assigned/buses',
    AllBusesWithRoutes
  );
  router.get(
    '/all/unassigned/buses',
    AllBusesWithNoRoutes
  );
  router.put(
    '/unassign/bus/:busId/bus/:routeId',
    unAssignBusToRoute
  ); 
  
 
 
 
  export default router;