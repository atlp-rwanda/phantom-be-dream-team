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
     static associate({ AssignBusToRoute }) {
    }
    toJSON() {
        return {
            ...this.get(),
            id: undefined,
            createdAt: undefined,
            updatedAt: undefined
        }
    }
  }
  Route.init({
    uuid:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
     },
     name: {
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Route should have a name"},
         notEmpty:{msg:"Name should not be empty"},
       }
     },
     routeCode:{
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Route should have a Code"},
         notEmpty:{msg:"Route Code should not be empty"},
       }
     },
     startLocation:{
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Route should have a start Location"},
         notEmpty:{msg:"Start Location should not be empty"},
       }
     },
     endLocation: {
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Route should have an end Location"},
         notEmpty:{msg:"End Location should not be empty"},
       }
     },
     distance:{
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Route should have a distance"},
         notEmpty:{msg:"Distance should not be empty"},
       }
     },
     duration:{
       type:DataTypes.STRING,
       allowNull:false,
       validate:{
         notNull:{msg:"Route should have a duration"},
         notEmpty:{msg:"Duration should not be empty"},
       }
     }
  }, {
    sequelize,
    modelName: 'Route',
  });
  return Route;
};