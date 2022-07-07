import { verify } from 'crypto';
import express from 'express';
import {
  addRoute,
  findAll,
  findOne,
  updateRoute,
  removeRoute,
  deleteAll,
} from '../../controllers/routeController';
import {checkAdmin} from '../../middleware/check';

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', checkAdmin, findAll);
router.get('/:id', checkAdmin, findOne);
router.put('/:id', checkAdmin, updateRoute);
router.post('/',  checkAdmin,addRoute);
router.delete('/:id', checkAdmin, removeRoute);
router.delete('/', checkAdmin,deleteAll);

export default router;
