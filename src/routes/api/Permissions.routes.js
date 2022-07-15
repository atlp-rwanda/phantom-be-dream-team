import express from 'express'
import { createPermission, allPermissions, getPermission, updatePermission, deletePermission } from '../../controllers/permissionsController';
import { checkAdmin } from '../../middleware/check';

const router = express.Router()


router.post('/', createPermission)
router.get('/', checkAdmin,allPermissions)
router.get('/:Id',checkAdmin, getPermission)
router.delete('/:Id', checkAdmin,deletePermission)
router.patch('/:Id',checkAdmin, updatePermission)

export default router