
import express from 'express'
import { createRole, allRoles, getRole, updateRole, deleteRole } from '../../controllers/rolescontrollers'

const router = express.Router()


router.post('/', createRole)
router.get('/', allRoles)
router.get('/:Id', getRole)
router.delete('/:Id', deleteRole)
router.patch('/:Id', updateRole)


export default router