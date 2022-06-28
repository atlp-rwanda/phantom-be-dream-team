import model from "../models";
const assignments = model.AssignedBusesToDrivers;
const Bus = model.Bus;
const Driver = model.Driver;

const createAssignment = async (req, res) => {
  try {
    const { busId, driverId } = req.params;
    console.log(busId, driverId);
    const bus = await Bus.findOne({ where:{ id: busId } });
    console.log(bus);
    if (!bus) {
      return res.status(404).json({
        status: "fail",
        message: "No bus found with that ID",
      });
    }

    const driver = await Driver.findOne({ where: { id: driverId } });

    if (!driver) {
      return res.status(404).json({
        status: "fail", 
        message: "No driver found with that ID",
      });
    }

    const assignment = await assignments.create({
      plateNumber: bus.plateNumber,
      firstName: driver.firstName,
      lastName: driver.lastName,
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
      message: "Error assigning bus to driver",
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
      message: "Error while getting all drivers to buses assignment",
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
      message: "Error assigning bus to driver",
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
      message: "Error assigning driver to bus",
      err: error.stack,
    });
  }
};
export {
  getAllAssignments, createAssignment, getAssignment,unAssign
};