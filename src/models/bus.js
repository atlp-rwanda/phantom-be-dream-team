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
    static associate(models) {
      // define association here
    }
  }
  Bus.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Bus must have a company" },
        notEmpty: { msg: "company must not be empty" },
      },
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Bus must have a Type" },
        notEmpty: { msg: "Type must not be empty" },
      },
    },
    plateNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Bus must have a plateNumber" },
        notEmpty: { msg: "plateNumber must not be empty" },
      },
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Bus must have a Manufacturer" },
        notEmpty: { msg: "Manufacturer must not be empty" },
      },
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: { msg: "Bus must have a capacity" },
        notEmpty: { msg: "Capacity must not be empty" },
      },
    },
    yearOfManufacturing: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Bus must have a Year Of Manufacturing" },
        notEmpty: { msg: "Year Of Manufacturing must not be empty" },
      },
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:true,
      defaultValue:null
    },
    isAssigned: {
      type: DataTypes.BOOLEAN,
      defaultValue:false
    }
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};