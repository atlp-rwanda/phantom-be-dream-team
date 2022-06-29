import express from 'express'
import { startBus, getBusInRoad, getAllBusInRoad, UpdateBusInfo, stopBus } from '../../controllers/busInRoad';
import verify from '../../helpers/verify';
const router = express.Router()

router.get('/:id', getBusInRoad);
router.post('/start/', verify,startBus);
router.post('/stop/:id', verify, stopBus);
router.patch('/update/:id', verify, UpdateBusInfo);
router.get('/alltracks/bus', verify, getAllBusInRoad);


export default router






