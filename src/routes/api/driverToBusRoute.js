import express from 'express';
import {
    findOneAssign,
    getAllDriverAssignToBuses,
    PostAssignDriverToBuses,
    UnAssignDriver,
    UpdateOneAssign,
  } from '../../controllers/driverToBusController';
//   import {protect,UserOperator} from '../../controllers/authController';

const router = express.Router();

router.get(
    '/',
    // protect,
    // UserOperator,
    getAllDriverAssignToBuses
  );
  router.post(
    '/bus/:busId/driver/:driverId',
    // protect,
    // UserOperator,
    PostAssignDriverToBuses
  );
  router.get(
    '/:id',
    // protect,
    // UserOperator,
    findOneAssign
  );
  router.patch(
    '/:id',
//     protect,
//    UserOperator,
    UpdateOneAssign
  );
  router.delete(
    '/:id',
    // protect,
    // UserOperator,
    UnAssignDriver
  );
  export default router;



