import express from 'express'
import { startBus, getBusInRoad, getAllBusInRoad, UpdateBusInfo, stopBus } from '../../controllers/busInRoad';
import verify from '../../helpers/verify';
import { checkAdmin } from "../../middleware/check";
const router = express.Router()

router.get('/:id', getBusInRoad);
router.post('/start/', checkAdmin,startBus);
router.post('/stop/:id', checkAdmin, stopBus);
router.patch('/update/:id', checkAdmin, UpdateBusInfo);
router.get('/alltracks/bus', checkAdmin, getAllBusInRoad);


export default router






