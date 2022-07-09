import express from 'express';
import {AssignDriverToBus,unAssignDriverToBus,AllAssignedBuses,AllAssignedDrivers,} from '../../controllers/driverToBusController';
import models from "../../models"
import {paginatedResult} from "../../middleware/driverToBusPagination"

const router = express.Router();


  router.post(
    '/assign/driver/:driverId/bus/:busId',
    AssignDriverToBus
  );

  router.get(
    '/all/assigned/buses', paginatedResult(models.Bus),
    AllAssignedBuses
  );
  router.get(
    '/all/assigned/drivers',
    AllAssignedDrivers,
  ); 

  router.put(
    '/unassign/driver/:driverId/bus/:busId',
    unAssignDriverToBus
  );
 
 
 
  export default router;



