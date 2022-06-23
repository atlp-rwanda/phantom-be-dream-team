
import express from 'express'
import { createRole, allRoles, getRole, updateRole, deleteRole } from '../controllers/rolescontrollers';

const router = express.Router()


router.post('/api/v1/createRole', createRole)
router.get('/api/v1/getRoles', allRoles)
router.get('/api/v1/getRole/:roleId', getRole)
router.delete('/api/v1/deleteRole/:roleId', deleteRole)
router.patch('/api/v1/updateRole/:roleId', updateRole)


export default router