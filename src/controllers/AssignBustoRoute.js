import model from "../models";
const assignments = model.AssignBustoRoute;
const Bus = model.Bus;
const Route = model.Route;

const createAssignment = async (req, res) => {
  try {
    const { busId, routeId } = req.params;
    console.log(busId, routeId);
    const bus = await Bus.findOne({ where:{ id: busId } });
    console.log(bus);
    if (!bus) {
      return res.status(404).json({
        status: "fail",
        message: "No bus found with that ID",
      });
    }

    const route = await Route.findOne({ where: { id: routeId } });

    if (!route) {
      return res.status(404).json({
        status: "fail",
        message: "No route found with that ID",
      });
    }

    const assignment = await assignments.create({
      uuid: bus.uuid,
      routeName: route.name,
      routeCode: route.routeCode,
      startingPoint: route.startLocation,
      endingPoint: route.endLocation,
      duration: route.duration,
      distance: route.distance,
      plateNumber: bus.plateNumber,
      busId: bus.uuid,
    });
    console.log(assignment);
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
const getAllAssignments = async (req, res) => {
  try {
    const assignment = await assignments.findAll({});
    console.log(assignment);
    if (!assignment) {
      return res.status(404).json({
        status: "fail",
        message: "No assignments found ",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        Assignments: assignment,
      },
    });
  }
  catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error while getting all buses to routes assignment",
    });
  }
}

const getAssignment = async (req, res) => {
  try {
    const id = req.params.id;

    const assignment = await assignments.findOne({ where: { id } });
    if (!assignment) {
      return res.status(404).json({
        status: "fail",
        message: "No assignment found with that ID",
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        Assignments: assignment,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error assigning bus to route",
      err: error.stack,
    });
  }
};

const unAssign = async (req, res) => {
  try {
    const id = req.params.id;

    const assignment = await assignments.findOne({ where: { id } });

    if (!assignment) {
      return res.status(404).json({
        status: "fail",
        message: "No assignment found with that ID",
      });
    }

    await assignment.destroy();

    res.status(200).json({
      status: "success",
      message: "Bus unAssigned Successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error assigning bus to route",
      err: error.stack,
    });
  }
};
export {
  getAllAssignments, createAssignment, getAssignment,unAssign
};

