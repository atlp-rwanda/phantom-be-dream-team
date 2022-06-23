import express from 'express';
import { AssignBusToRoute } from '../../models';
// const { busToRoutePagination } = require("./../../../Middlewares/Middlewares");
import {createAssignment, getAllAssignments,getAssignment, unAssign,} from '../../controllers/AssignBustoRoute';

const router = express.Router();

router.post("/:routeId/:busId", createAssignment);
// router.get("/",getAllAssignments)
// router.get("/:uuid",getAssignment)
// router.delete("/:uuid",unAssign)

export default router;