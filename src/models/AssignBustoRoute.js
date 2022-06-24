'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssignBustoRoute extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssignBustoRoute.init({
    uuid: DataTypes.UUID,
    routeName: DataTypes.STRING,
    routeCode: DataTypes.STRING,
    startingPoint: DataTypes.STRING,
    endingPoint: DataTypes.STRING,
    plateNumber: DataTypes.STRING,
    distance: DataTypes.STRING,
    duration: DataTypes.STRING,
    busId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AssignBustoRoute',
  });
  return AssignBustoRoute;
};