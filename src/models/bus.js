'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User }) {
      this.belongsTo(User, { foreignKey: "userId",as:"user" });
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined,
        userId: undefined,
        createdAt: undefined,
        updatedAt:undefined,
      };
    }
  }
  Bus.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
  },
    company: DataTypes.STRING,
    type: DataTypes.STRING,
    plateNumber: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    capacity: DataTypes.STRING,
    yearOfManufacturing: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    isAssigned: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};