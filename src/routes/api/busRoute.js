import express from "express";
import Buses from "../../controllers/bus";
import { checkAdmin } from "../../middleware/check";

const router = express.Router()


router.post('/',checkAdmin,  Buses.create) // create bus
router.get('/',checkAdmin,   Buses.listAll) // Get bus
router.get('/:id',checkAdmin,   Buses.findbus) // Get bus by ID
router.put('/:id',checkAdmin,   Buses.modify) // update bus
router.delete('/:id',checkAdmin,   Buses.delete) // delete bus


export default router
