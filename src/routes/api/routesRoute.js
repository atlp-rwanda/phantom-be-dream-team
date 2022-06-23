import express from 'express';
import {
  addRoute,
  findAll,
  findOne,
  updateRoute,
  removeRoute,
  deleteAll,
} from '../../controllers/routeController';


// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findOne);
router.put('/:id', updateRoute);
router.post('/', addRoute);
router.delete('/:id', removeRoute);
router.delete('/', deleteAll);

export default router;
