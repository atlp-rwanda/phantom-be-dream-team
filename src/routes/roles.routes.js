

// import express from 'express'
// import { createRole, getAllRoles, getRole, updateRole, deleteRole } from '../Roles/controllers/roles.controllers';

// const router = express.Router()


// router.route('/').post(createRole).get(getAllRoles);
// router.route('/:uuid').get(getRole).patch(updateRole).delete(deleteRole);

// export default router
import express from 'express'
import { createRole, getAllRoles, getRole, updateRole, deleteRole } from '../controllers/rolescontrollers';
// import resetAuth from '../middleware/resetAuth'

const router = express.Router()


router.post('/api/v1/createRole', createRole)
// router.get('/api/v1/getRoles', getAllRoles)
// router.get('/api/v1/getRole/:roleId', getRole)
// router.delete('/api/v1/deleteRole/:roleId', deleteRole)
// router.patch('/api/v1/updateRole/:roleId', updateRole)


export default router