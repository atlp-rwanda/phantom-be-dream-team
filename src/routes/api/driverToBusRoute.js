import express from 'express';
import {createAssignment, getAllAssignments,getAssignment, unAssign,} from '../../controllers/driverToBusController';
const router = express.Router();

router.get("/",getAllAssignments)
router.post("/:driverId/:busId", createAssignment);
router.get("/:id",getAssignment)
router.delete("/:id",unAssign)

export default router;