'use strict';
import SequelizeSlugify from 'sequelize-slugify';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Route extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Bus}) {
      // define association here
      this.hasMany(Bus,{ foreignKey: "routeId",as:"route" });

    }
  }
  Route.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },

      origin: DataTypes.STRING,
      destination: DataTypes.STRING,
      code: DataTypes.STRING,
      distance: DataTypes.STRING,
      routeSlug: DataTypes.STRING,
      coordinates: DataTypes.ARRAY(DataTypes.DECIMAL),
    },
    {
      sequelize,
      modelName: 'Route',
    },
);
// Route.removeAttribute('id');

SequelizeSlugify.slugifyModel(Route, {
  source: ['origin'],
  suffixSource: ['code'],
  incrementalSeparator: '-',
  overwrite: true,
  bulkUpdate: true,
  suffixSource: ['destination'],
  column: 'routeSlug',
});
return Route;
};