import express from 'express';
import authController from '../../controllers/authController';

import { addUser, allUsers, findOneUser, update, deleteUser} from '../../controllers/usersController'



const router = express.Router();

router.post('/login', authController.login);
router.post('/register', addUser)
router.get('/', allUsers)
router.get('/:id', findOneUser)
router.put('/:id', update)
router.delete('/:id', deleteUser)



export default router;
