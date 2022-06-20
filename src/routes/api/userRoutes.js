import express from 'express';

import { addUser, allUsers, findOneUser, update, deleteUser} from '../../controllers/usersController'



const router = express.Router();


router.post('/register', addUser)
router.get('/', allUsers)
router.get('/:id', findOneUser)
router.put('/:id', update)
router.delete('/:id', deleteUser)

export default router;
