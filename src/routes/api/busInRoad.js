import express from 'express'
import { getBusInRoad,UpdateBusInfo } from '../../controllers/busInRoad';
// import verify from '../../helpers/verify';
const router = express.Router()


router.get('/:id', getBusInRoad);
router.patch('/update/:id', UpdateBusInfo);

export default router






