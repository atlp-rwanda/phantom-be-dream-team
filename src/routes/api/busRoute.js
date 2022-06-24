import express from "express";
import Buses from "../../controllers/bus"

const router = express.Router()


router.post('/',  Buses.create) // create bus
router.get('/',   Buses.listAll) // Get bus
router.get('/:id',   Buses.findbus) // Get bus by ID
// router.put('/:id',   Buses.modify) // update bus
// router.delete('/:id',   Buses.delete) // delete bus


export default router
