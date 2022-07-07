import express from 'express';
import {
  AssignDriverToBus,
  unAssignDriverToBus,
  AllAssignedDrivers,
  AllAssignedBusses,
  } from '../../controllers/driverToBusController';
//   import {protect,UserOperator} from '../../controllers/authController';

const router = express.Router();


  router.post(
    '/bus/:busId/driver/:driverId',
    AssignDriverToBus
  );
 
  export default router;



