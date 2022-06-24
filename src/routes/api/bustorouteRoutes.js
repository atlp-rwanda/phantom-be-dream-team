import express from 'express';
import { AssignBusToRoute } from '../../models';
// const { busToRoutePagination } = require("./../../../Middlewares/Middlewares");
import {createAssignment, getAllAssignments,getAssignment, unAssign,} from '../../controllers/AssignBustoRoute';

const router = express.Router();

router.post("/:routeId/:busId", createAssignment);
router.get("/",getAllAssignments)
// router.get("/:id",getAssignment)
// router.delete("/:id",unAssign)

export default router;