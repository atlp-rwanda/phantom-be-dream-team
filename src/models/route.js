'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({AssignBusToRoute}) {
      //  this.hasOne(AssignBusToRoute,{ foreignKey: "busId",as:"routes"})
      }
      toJSON(){
        return{
          ...this.get(),
          id:undefined,
          createdAt:undefined,
          updatedAt:undefined
        }
      }
  }
  Route.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
  },
    name: DataTypes.STRING,
    routeCode: DataTypes.STRING,
    startLocation: DataTypes.STRING,
    endLocation: DataTypes.STRING,
    distance: DataTypes.STRING,
    duration: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};