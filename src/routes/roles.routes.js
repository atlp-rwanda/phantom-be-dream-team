

// import express from 'express'
// import { createRole, getAllRoles, getRole, updateRole, deleteRole } from '../Roles/controllers/roles.controllers';

// const router = express.Router()


// router.route('/').post(createRole).get(getAllRoles);
// router.route('/:uuid').get(getRole).patch(updateRole).delete(deleteRole);

// export default router
import express from 'express'
import { createRole, getAllRoles, getRole, updateRole, deleteRole } from '../Roles/controllers/roles.controllers';
// import resetAuth from '../middleware/resetAuth'

const router = express.Router()


router.post('/api/v1/createRole', createRole)
router.get('/api/v1/getRole', getAllRoles)


export default router