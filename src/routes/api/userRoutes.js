import express from 'express';
import authController from '../../controllers/authController';
import {addUser} from '../../controllers/userController';
// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/login', authController.login);
router.post('/register', addUser);
export default router;
