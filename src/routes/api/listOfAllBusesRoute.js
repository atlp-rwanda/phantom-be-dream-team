import express from 'express';
import {AllBuses} from '../../controllers/listOfAllBusesController'
import { checkAdmin } from "../../middleware/check";

const router = express.Router();

  router.get(
    '/allbuses/:from/:to',
    AllBuses
  );
 
   
  export default router;