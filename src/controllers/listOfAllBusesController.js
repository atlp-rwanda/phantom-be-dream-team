import models from "../models"
import { Op} from "sequelize";

const AllBuses = async (req, res) => {
  const from= req.params.from;
  const to= req.params.to;
  try {
    const route = await models.Route.findAll({ 
    where: {
        [Op.and]: [
        { origin: from },
        { destination: to}
        ]
    },
   
    });

    const buses = await models.Bus.findAll( { where: { routeId:{[Op.eq]: route[0].id}}, order: ['id'],});

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
      message: `Error while Getting all buses from ${from} to ${to}, check well if you have entered the right co-ordinations`,
    });
  }
};

module.exports = {
  AllBuses
};