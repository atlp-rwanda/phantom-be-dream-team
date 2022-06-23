


import express from 'express'
import { createPermissions, getAllRoles, getRole, updateRole, deleteRole } from '../controllers/permissionsController';


const router = express.Router()


router.post('/api/v1/createPermissions', createPermissions)
// router.get('/api/v1/getRoles', getAllRoles)
// router.get('/api/v1/getRole/:roleId', getRole)
// router.delete('/api/v1/deleteRole/:roleId', deleteRole)
// router.patch('/api/v1/updateRole/:roleId', updateRole)


export default router