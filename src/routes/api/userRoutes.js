import express from 'express';
import authController from '../../controllers/authController';
import {checkAdmin} from '../../middleware/check'

import { addUser, allUsers, findOneUser, update, deleteUser} from '../../controllers/usersController'



const router = express.Router();

router.post('/login', authController.login);
router.post('/register', addUser)
router.get('/',checkAdmin, allUsers)
router.get('/:id',checkAdmin, findOneUser)
router.put('/:id',checkAdmin, update)
router.delete('/:id',checkAdmin, deleteUser)



export default router;
