
import express from 'express'
import { createRole, allRoles, getRole, updateRole, deleteRole } from '../../controllers/rolescontrollers'
import { checkAdmin } from '../../middleware/check'

const router = express.Router()


router.post('/', checkAdmin,createRole)
router.get('/', checkAdmin,allRoles)
router.get('/:Id', checkAdmin,getRole)
router.delete('/:Id',checkAdmin, deleteRole)
router.patch('/:Id',checkAdmin, updateRole)


export default router