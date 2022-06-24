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
     static associate({Bus}) {
        this.belongsTo(Bus,{ foreignKey:'busId',as:"buses"})
    }
  toJSON() {
    return {
        ...this.get(),
        id:undefined,
        createdAt:undefined,
        updatedAt:undefined,
        busId:undefined,
      };
  }
  }
  AssignBustoRoute.init({
    id: {
      type:DataTypes.INTEGER,
      primaryKey: true
  },
      routeName: DataTypes.STRING,
      routeCode: DataTypes.STRING,
      startingPoint: DataTypes.STRING,
      endingPoint: DataTypes.STRING,
      plateNumber: DataTypes.STRING,
      distance:DataTypes.STRING,
      duration: DataTypes.STRING,
      busId:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'AssignBustoRoute',
  });
  return AssignBustoRoute;
};