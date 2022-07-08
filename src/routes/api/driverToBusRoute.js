import express from 'express';
import {
  AssignDriverToBus,
  unAssignDriverToBus,
  AllAssignedBuses,
  AllAssignedDrivers,
  } from '../../controllers/driverToBusController';

const router = express.Router();


  router.post(
    '/assign/driver/:driverId/bus/:busId',
    AssignDriverToBus
  );

  router.get(
    '/all/assigned/buses',
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



