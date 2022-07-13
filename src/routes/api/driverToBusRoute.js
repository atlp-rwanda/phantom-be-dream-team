import express from 'express';
import {AssignDriverToBus,unAssignDriverToBus,AllAssignedBuses,AllUnAssignedBuses,AllAssignedDrivers,} from '../../controllers/driverToBusController';
import models from "../../models"
import { checkAdmin } from "../../middleware/check";
import {paginatedResult} from "../../middleware/driverToBusPagination"

const router = express.Router();


  router.post(
    '/assign/driver/:driverId/bus/:busId',checkAdmin,
    AssignDriverToBus
  );

  router.get(
    '/all/assigned/buses', checkAdmin, paginatedResult(models.Bus),
    AllAssignedBuses
  );
  router.get(
    '/all/unassigned/buses',checkAdmin,
    AllUnAssignedBuses
  );
  router.get(
    '/all/unassigned/drivers',checkAdmin,
    AllUnAssignedBuses
  );
  router.get(
    '/all/assigned/drivers',checkAdmin,
    AllAssignedDrivers,
  ); 

  router.put(
    '/unassign/driver/:driverId/bus/:busId',checkAdmin,
    unAssignDriverToBus
  );
 
 
 
  export default router;



