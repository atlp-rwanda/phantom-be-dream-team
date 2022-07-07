import sendEmail from "../utils/Email";
import Bus from "../models/bus"
import User from "../models/user"

const AssignDriverToBus = async (req, res) => {
  try {
    const driverId = req.params.driverId;
    const busId = req.params.busId;

    const user = await User.findOne({ where: { id: driverId} });

    if (!user) {
      return res.status(404).josn({
        status: "fail",
        message: "No Driver found with that ID",
      });
    } else if (user.role !== "driver") {
      return res.status(403).json({
        status: "fail",
        message: "The user is not a Driver, try again",
      });
    } else if (user.isAssigned) {
      return res.status(403).json({
        status: "fail",
        message: "Driver is already assigned to a Bus",
      });
    } else {
      user.isAssigned = true;
      await user.save();
    }

    const bus = await Bus.findOne({ where: { id: busId } });

    if (!bus) {
      return res.status(404).json({
        status: "fail",
        message: "No Bus found with that ID",
      });
    } else if (bus.isAssigned) {
      return res.status(403).json({
        status: "fail",
        message: `This Bus is already assigned to someone`,
      });
    } else {
      bus.userId = user.id;
      bus.isAssigned = true;
      await bus.save();
    }

    const message = `
    Dear ${user.name},
    Congratulations, you have been given a new Bus having the following characteristics
    __________________________________________________________________________________
    Type:${bus.type}, Plate Number :${bus.plateNumber}.`;

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
    res.status(500).json({
      status: "Error",
      message: "Error while Assigning Driver To Bus",
    });
  }
};

module.exports = {
  AssignDriverToBus,
};