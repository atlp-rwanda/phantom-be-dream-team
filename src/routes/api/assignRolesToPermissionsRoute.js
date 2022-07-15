import express from 'express';
import {AssignRoleToPermission} from '../../controllers/assignRolesToPermissionsController'
import models from "../../models"
// import { checkAdmin } from "../../middleware/check";
// import {paginatedResult} from "../../middleware/busToRoutePagination"

const router = express.Router();


  router.post(
    '/assign/role/:RoleId/permission/:PermissionId',
    AssignRoleToPermission
  );

//   router.get(
//     '/all/assigned/buses',checkAdmin, paginatedResult(models.Bus),
//     AllBusesWithRoutes
//   );
//   router.get(
//     '/all/unassigned/buses',checkAdmin,
//     AllBusesWithNoRoutes
//   );
//   router.put(
//     '/unassign/bus/:busId/route/:routeId',checkAdmin,
//     unAssignBusToRoute
//   ); 
   
 
 
 
  export default router;