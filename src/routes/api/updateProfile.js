import express from 'express';
import {getUser, updateUser} from '../../controllers/user';
// import verify from '../../helpers/verify';
// eslint-disable-next-line new-cap
const router = express.Router();


router.get('/:id', getUser);
router.patch('/update/:id', updateUser);

export default router;


