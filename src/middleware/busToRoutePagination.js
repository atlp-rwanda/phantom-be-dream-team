import { Op } from "sequelize";
const paginatedResult = (model) => {
    return async (req, res, next) => {
      const count = await model.findAndCountAll({ include: "route" });
  
      const results = {};
  
      if (req.query.page && req.query.limit) {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
  
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
  
        if (endIndex < count.count) {
          results.next = {
            page: page + 1,
            limit: limit,
          };
        }
        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            limit: limit,
          };
        }
  
        results.results = await model.findAndCountAll({
          include: "route",
          where: {
            routeId: {
              [Op.ne]: null,
            },
          },
          limit: limit,
          offset: page * limit,
        });
      } else {
        results.results = await model.findAndCountAll({
          include: "route",
          where: {
            routeId: {
              [Op.ne]: null,
            },
          },
        });
      }
      
      res.paginatedResults = results;

  
      next();
    };
    
  };
module.exports = {
    paginatedResult,
   
  };