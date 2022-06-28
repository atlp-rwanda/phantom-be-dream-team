'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AssignedBusesToDrivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AssignedBusesToDrivers.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    plateNumber: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AssignedBusesToDrivers',
  });
  return AssignedBusesToDrivers;
};