import express from 'express'
import {getUser,updateUser} from '../../controllers/user';

const router = express.Router()


router.get('/:id', getUser);
router.post('/update/:id', updateUser);

export default router






