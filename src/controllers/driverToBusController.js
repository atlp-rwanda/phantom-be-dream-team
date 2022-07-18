import sendEmail from "../utils/Email";
import models from "../models"
import { Op } from "sequelize";
const AssignDriverToBus = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    const busId = req.params.busId;

    const user = await models.User.findOne({ where: { id: driverId } });

    if (!user) {
      return res.status(404).josn({
        status: "fail",
        message: "The Driver found with that ID",
      });
    } else if (user.role !== "Driver") {
      return res.status(403).json({
        status: "fail",
        message: "The user is not a Driver, try again",
      });
    } else if (user.plateNumber) {
      return res.status(403).json({
        status: "fail",
        message: "Driver is already assigned to a Bus",
      });
    } 
    
    const bus = await models.Bus.findOne({ where: { id: busId } });

    if (!bus) {
      return res.status(404).json({
        status: "fail",
        message: "No Bus found with that ID",
      });
    } else if (bus.userId != null) {
      return res.status(403).json({
        status: "fail",
        message: `This Bus is already assigned to someone`,
      });
    } else {
      bus.userId = user.id;
      user.plateNumber = bus.plate;
      await user.save();
      await bus.save();
    }

    const message = `
    Dear ${user.names},
    Congratulations, you have been given a new Bus having the following characteristics
    __________________________________________________________________________________
    Type:${bus.busType}, Plate Number :${bus.plate}.`;

    await sendEmail({
      email: user.email,
      subject: "Congratulations, You have been Assigned to a new Bus.",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Email has been sent successfully to Driver's Email",
    });
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: "Error",
      message: "Error while Assigning Driver To Bus",
    });
  }
};

const AllAssignedBuses = async (req, res) => {
  try {
    const buses = await models.Bus.findAll( { where: { userId:{[Op.ne]: null}}, include: "user"});

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
      message: "Error while Getting all Assigned Drivers",
    });
  }
};
const AllUnAssignedBuses = async (req, res) => {
  try {
    const buses = await models.Bus.findAll( { where: { userId:{[Op.eq]: null}}});

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

const AllAssignedDrivers = async (req, res) => {
  try {
    const users = await models.User.findAll( { where: { plateNumber:{[Op.ne]: null}}});

    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Error while Getting all Assigned Drivers",
    });
  }
};


const AllUnAssignedDrivers = async (req, res) => {
  try {
    const users = await models.User.findAll( { where: { plateNumber:{[Op.eq]: null} }});

    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Error while Getting all Assigned Drivers",
    });
  }
};


const unAssignDriverToBus = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    const busId = req.params.busId;

    const user = await models.User.findOne({ where: { id: driverId } });

    if (!user) {
      return res.status(404).josn({
        status: "fail",
        message: "No Driver found with that ID",
      });
    } else if (user.role !== "Driver") {
      return res.status(403).json({
        status: "fail",
        message: "The user is not a Driver, try again",
      });
    } else if (!user.plateNumber) {
      return res.status(403).json({
        status: "fail",
        message: "The user is not assigned to any bus, Please try again",
      });
    } 
   
    const bus = await models.Bus.findOne({ where: { id: busId } });

    if (!bus) {
      return res.status(404).json({
        status: "fail",
        message: "No Bus found with that ID",
      });
    } else if (bus.userId == null) {
      return res.status(403).json({
        status: "fail",
        message: "This Bus is not assigned to any one",
      });
    } else {
      bus.userId = null;
      user.plateNumber = null;
      await user.save();
      await bus.save();
    }

    const message = `
        Dear ${user.names},you have been un assigned from a Bus you have been driving having the following characteristics
        _________________________________________________________________________________________________________________
        Type:${bus.busType}, Plate Number :${bus.plate}.`;

    await sendEmail({
      email: user.email,
      subject: "Phantom Has un assigned you from a Bus you have been Driving.",
      message,
    });

    res.status(200).json({
      status: "success",
      message: "Email has been sent successfully to Driver's Email",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Error",
      message: "Error While removing Driver from driving this Bus",
    });
  }
};
module.exports = {
  AssignDriverToBus,
  AllAssignedBuses,
  unAssignDriverToBus,
  AllAssignedDrivers,
  AllUnAssignedBuses,
  AllUnAssignedDrivers
};
