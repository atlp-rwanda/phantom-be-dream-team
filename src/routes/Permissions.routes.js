


import express from 'express'
import { createPermissions, allPermissions, getPermissions, updatePermissions, deletePermissions } from '../controllers/permissionsController';

const router = express.Router()


router.post('/api/v1/createPermissions', createPermissions)
router.get('/api/v1/getPermissions', allPermissions)
router.get('/api/v1/getPermissions/:PermissionsId', getPermissions)
router.delete('/api/v1/deletePermissions/:PermissionsId', deletePermissions)
router.patch('/api/v1/updatePermissions/:PermissionsId', updatePermissions)

export default router