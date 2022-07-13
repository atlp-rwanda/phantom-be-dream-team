import express from 'express';
import {AllBuses} from '../../controllers/listOfAllBusesController'

const router = express.Router();

  router.get(
    '/allbuses/:from/:to',
    AllBuses
  );
 
   
  export default router;