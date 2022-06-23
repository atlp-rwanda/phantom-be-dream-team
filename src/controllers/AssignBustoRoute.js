import { AssignBusToRoute, Bus, Route }from '../models';
import { op } from 'sequelize';

 const createAssignment = async (req, res) => {
    try {
      const { busId, routeId } = req.params;
      console.log(busId, routeId);
    //   const bus = await Bus.findOne({ where: { uuid: busId } });
    const bus=busId;
      console.log(bus);
      if (!bus) {
        return res.status(404).json({
          status: "fail",
          message: "No bus found with that ID",
        });
      }
  
    //   const route = await Route.findOne({ where: { uuid: routeId } });
    const route=routeId;
      console.log(route);
  
      if (!route) {
        return res.status(404).json({
          status: "fail",
          message: "No route found with that ID",
        });
      }
  
      const assignment = await AssignBusToRoute.create({
        routeName: route.name,
        routeCode: route.routeCode,
        startingPoint: route.startLocation,
        endingPoint: route.endLocation,
        duration: route.duration,
        distance: route.distance,
        plateNumber: bus.plateNumber,
        busId: bus.id,
      });
  
      res.status(200).json({
        status: "success",
        message: "Bus Assined Successfully",
        data: {
          assign: assignment,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error assigning bus to route",
        err: error.stack,
      });
      console.error(error);
    }
  };

  export {createAssignment};