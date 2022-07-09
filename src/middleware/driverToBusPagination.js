import { Op } from "sequelize";
const paginatedResult = (model) => {
    return async (req, res, next) => {
      const count = await model.findAndCountAll({ include: "user" });
  
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
          include: "user",
          where: {
            isAssigned: {
              [Op.ne]: false,
            },
          },
          limit: limit,
          offset: page * limit,
        });
      } else {
        results.results = await model.findAndCountAll({
          include: "user",
          where: {
            isAssigned: {
              [Op.ne]: false,
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