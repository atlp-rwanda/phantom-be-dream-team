import express from 'express';
import {createAssignment, getAllAssignments,getAssignment, unAssign,} from '../../controllers/AssignBustoRoute';
const router = express.Router();

router.get("/",getAllAssignments)
router.post("/:routeId/:busId", createAssignment);
router.get("/:id",getAssignment)
router.delete("/:id",unAssign)

export default router;