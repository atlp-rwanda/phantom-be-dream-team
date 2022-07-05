function paginatedResult(model) {
    return async (req, res, next) => {
      const count = await model.findAndCountAll();
      console.log('---', count);
      const page = parseInt(req.query.page);
      const size = parseInt(req.query.size);
      const startIndex = (page - 1) * size;
      const endIndex = page * size;
  
      const results = {};
      if (page || size) {
        if (endIndex < count.count) {
          results.next = {
            page: page + 1,
            size: size,
          };
        }
  
        if (startIndex > 0) {
          results.previous = {
            page: page - 1,
            size: size,
          };
        }
  
        results.results = await model.findAll({
          size: size,
          offset: page * size,
        });
      } else {
        results.results = await model.findAll({});
      }
  
      res.paginatedResults = results;
      next();
    };
  }
  export default paginatedResult;