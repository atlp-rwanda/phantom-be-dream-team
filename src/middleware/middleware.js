// const {User} = require('./../../models');
// const {Op} = require('sequelize');

// const jwt = require('jsonwebtoken');
// const {promisify} = require('util');

// const protect = async (req, res, next) => {
//   try {
//     let token;

//     // Get token and Check if is there.

//     if (req.headers.authorization.startsWith('Bearer')) {
//       token = req.headers.authorization.split(' ')[1];
//     }

//     // console.log(token)

//     if (!token) {
//       return res.status(401).json({
//         message: req.t('middleware protect message'),
//       });
//     }

//     //  Token verification
//     const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRETE);
//     console.log(decoded);

//     // Check if User exist

//     const uuid = decoded.uuid;
//     console.log(uuid);

//     const freshUser = await User.findOne({
//       where: {uuid: decoded.uuid},
//     });

//     if (!freshUser) {
//       return res.status(401).json({
//         message: req.t('middleware not fresh user'),
//       });
//     }

//     req.user = freshUser;

//     next();
//   } catch (error) {
//     res.status(401).json({
//       message: req.t('try again message'),
//       err: error.message,
//     });
//     console.log(error);
//   }
// };

// const restrictTo = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.roleName)) {
//       return res.status(403).json({
//         message: req.t('middleware restrict message'),
//       });
//     }
//     next();
//   };
// };

// const paginatedResult = (model) => {
//   return async (req, res, next) => {
//     const count = await model.findAndCountAll({include: 'bus'});

//     const results = {};

//     if (req.query.page && req.query.limit) {
//       const page = parseInt(req.query.page);
//       const limit = parseInt(req.query.limit);

//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;

//       if (endIndex < count.count) {
//         results.next = {
//           page: page + 1,
//           limit: limit,
//         };
//       }
//       if (startIndex > 0) {
//         results.previous = {
//           page: page - 1,
//           limit: limit,
//         };
//       }

//       results.drivers = await model.findAndCountAll({
//         include: 'bus',
//         where: {
//           isAssigned: {
//             [Op.ne]: false,
//           },
//         },
//         limit: limit,
//         offset: page * limit,
//       });
//     } else {
//       results.drivers = await model.findAndCountAll({
//         include: 'bus',
//         where: {
//           isAssigned: {
//             [Op.ne]: false,
//           },
//         },
//       });
//     }
//     res.paginatedResults = results;

//     next();
//   };
// };

// const busPagination = (model) => {
//   return async (req, res, next) => {
//     const count = await model.findAndCountAll();

//     const results = {};

//     if (req.query.page && req.query.limit) {
//       const page = parseInt(req.query.page);
//       const limit = parseInt(req.query.limit);

//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;

//       if (endIndex < count.count) {
//         results.next = {
//           page: page + 1,
//           limit: limit,
//         };
//       }
//       if (startIndex > 0) {
//         results.previous = {
//           page: page - 1,
//           limit: limit,
//         };
//       }

//       results.buses = await model.findAndCountAll({
//         limit: limit,
//         offset: page * limit,
//       });
//     } else {
//       results.buses = await model.findAndCountAll();
//     }
//     res.paginatedResults = results;

//     next();
//   };
// };

// const routePagination = (model) => {
//   return async (req, res, next) => {
//     const count = await model.findAndCountAll();

//     const results = {};

//     if (req.query.page && req.query.limit) {
//       const page = parseInt(req.query.page);
//       const limit = parseInt(req.query.limit);

//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;

//       if (endIndex < count.count) {
//         results.next = {
//           page: page + 1,
//           limit: limit,
//         };
//       }
//       if (startIndex > 0) {
//         results.previous = {
//           page: page - 1,
//           limit: limit,
//         };
//       }

//       results.routes = await model.findAndCountAll({
//         limit: limit,
//         offset: page * limit,
//       });
//     } else {
//       results.routes = await model.findAndCountAll();
//     }
//     res.paginatedResults = results;

//     next();
//   };
// };

// const busToRoutePagination = (model) => {
//   return async (req, res, next) => {
//     let count;
//     if (req.query.origin && req.query.destination) {
//       count = await model.findAndCountAll({
//         where: {
//           startingPoint: {
//             [Op.eq]: req.query.origin,
//           },
//           endingPoint: {
//             [Op.eq]: req.query.destination,
//           },
//         },
//         include: 'buses',
//       });
//     } else {
//       count = await model.findAndCountAll({
//         include: 'buses',
//       });
//     }

//     const results = {};

//     if (req.query.page && req.query.limit) {
//       const page = parseInt(req.query.page);
//       const limit = parseInt(req.query.limit);

//       const startIndex = (page - 1) * limit;
//       const endIndex = page * limit;

//       if (endIndex < count.count) {
//         results.next = {
//           page: page + 1,
//           limit: limit,
//         };
//       }
//       if (startIndex > 0) {
//         results.previous = {
//           page: page - 1,
//           limit: limit,
//         };
//       }
//       results.assignments = await model.findAndCountAll({
//         include: 'buses',
//         limit: limit,
//         offset: page * limit,
//       });
//     } else {
//       results.assignments = await model.findAndCountAll({
//         include: 'buses',
//         where: {
//           startingPoint: {
//             [Op.eq]: req.query.origin,
//           },
//           endingPoint: {
//             [Op.eq]: req.query.destination,
//           },
//         },
//       });
//     }

//     res.paginatedResults = results;

//     next();
//   };
// };

// module.exports = {
//   protect,
//   restrictTo,
//   paginatedResult,
//   busPagination,
//   routePagination,
//   busToRoutePagination,
// };
