import express from 'express'
import {getUser,updateUser} from '../../controllers/user';
import verify from '../../helpers/verify';
const router = express.Router()


router.get('/:id', getUser);
router.patch('/update/:id', verify, updateUser);

export default router






