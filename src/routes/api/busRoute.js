import express from "express";
import Buses from "../../controllers/bus"

const router = express.Router()


router.post('/',  Buses.create) // create bus
router.get('/',  Buses.listAll) // Get bus


export default router
