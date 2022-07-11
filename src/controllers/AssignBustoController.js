import models from "../models"
import { Op } from "sequelize";
const AssignBusToRoute = async (req, res) => {
  try {
    const busId = req.params.busId;
    const routeId = req.params.routeId;

    const bus = await models.Bus.findOne({ where: { id: busId } });

    if (!bus) {
      return res.status(404).josn({
        status: "fail",
        message: "No Bus found with that ID",
      });
    }  else if (bus.routeId != null) {
      return res.status(403).json({
        status: "fail",
        message: "Bus is already assigned to a Route",
      });
    } 
    
    const route = await models.Route.findOne({ where: { id: routeId } });

    if (!route) {
      return res.status(404).json({
        status: "fail",
        message: "No Route found with that ID",
      });
    } else {
      bus.routeId = route.id;
      await bus.save();
    }

    res.status(200).json({
      status: "success",
      message: "Bus has been assigned to Route",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "Error",
      message: "Error while Assigning Bus to Route",
    });
  }
};

const AllBusesWithRoutes = async (req, res) => {
  try {
    const buses = await models.Bus.findAll( { where: { routeId:{[Op.ne]: null}}, include: "route"});

    res.status(200).json({
      status: "success",
      result: buses.length,
      data: {
        buses,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Error while Getting all Assigned buses to their corresponding routes ",
    });
  }
};
const AllBusesWithNoRoutes = async (req, res) => {
  try {
    const buses = await models.Bus.findAll( { where: { routeId:{[Op.eq]: null}}});

    res.status(200).json({
      status: "success",
      result: buses.length,
      data: {
        buses,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Error while Getting all UnAssigned Buses",
    });
  }
};

const unAssignBusToRoute = async (req, res) => {
  try {
    const busId = req.params.busId;
    const routeId = req.params.routeId;

    const bus = await models.Bus.findOne({ where: { id: busId } });

    if (!bus) {
      return res.status(404).josn({
        status: "fail",
        message: "No Bus found with that ID",
      });
    }else if (bus.routeId == null ) {
      return res.status(403).json({
        status: "fail",
        message: "The Bus is not assigned to any Route, Please try again",
      });
    } 
   
    const route = await models.Route.findOne();

    if (!route) {
      return res.status(404).json({
        status: "fail",
        message: "No Route found with that ID",
      });
    } else {
      bus.routeId = null;
      await bus.save();
    }

    res.status(200).json({
      status: "success",
      message: "The Bus has been unassigned to it's corresponding Route",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Error While removing Bus from the Route",
    });
  }
};
module.exports = {
  AssignBusToRoute,
  AllBusesWithRoutes,
  AllBusesWithNoRoutes,
  unAssignBusToRoute
};