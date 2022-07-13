import models from "../models"
import { Op } from "sequelize";

const AllBuses = async (req, res) => {
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

module.exports = {
  AllBuses
};