import express from 'express';
import {AssignRoleToPermission} from '../../controllers/assignRolesToPermissionsController'
import { checkAdmin } from "../../middleware/check";

const router = express.Router();


  router.post(
    '/assign/role/:RoleId/permission/:PermissionId',checkAdmin,
    AssignRoleToPermission
  ); 
  export default router;