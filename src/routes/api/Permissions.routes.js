


import express from 'express'
import { createPermissions, allPermissions, getPermissions, updatePermissions, deletePermissions } from '../../controllers/permissionsController';

const router = express.Router()


router.post('/', createPermissions)
router.get('/', allPermissions)
router.get('/:Id', getPermissions)
router.delete('/:Id', deletePermissions)
router.patch('/:Id', updatePermissions)

export default router