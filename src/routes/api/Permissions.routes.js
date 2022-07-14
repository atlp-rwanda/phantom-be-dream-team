


import express from 'express'
import { createPermission, allPermissions, getPermission, updatePermission, deletePermission } from '../../controllers/permissionsController';

const router = express.Router()


router.post('/', createPermission)
router.get('/', allPermissions)
router.get('/:Id', getPermission)
router.delete('/:Id', deletePermission)
router.patch('/:Id', updatePermission)

export default router