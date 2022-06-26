import express from 'express';
import { login, protect, logout} from '../../controllers/authController';
import checkToken from '../../middleware/checkToken'
import {addUser} from '../../controllers/userController';
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/login', login);
router.post('/register',protect, addUser);
router.post('/logout', checkToken, logout)
export default router;
