import express from 'express';
import {  logout} from '../../controllers/authController';
import{login} from '../../controllers/authController'
import checkToken from '../../middleware/checkToken'
// eslint-disable-next-line new-cap
import {checkAdmin} from '../../middleware/check'

import { addUser, allUsers, findOneUser, update, deleteUser} from '../../controllers/usersController'



const router = express.Router();

router.post('/login', login);
router.post('/logout', checkToken, logout)
router.post('/register',checkAdmin, addUser)
router.get('/',checkAdmin, allUsers)
router.get('/:id',checkAdmin, findOneUser)
router.put('/:id',checkAdmin, update)
router.delete('/:id',checkAdmin, deleteUser)



export default router;
