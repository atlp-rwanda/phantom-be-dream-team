import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class busInRoad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  busInRoad.init(
      {
        bus_Id: {type: DataTypes.STRING, allowNull: false},
        time_Start: {type: DataTypes.STRING, allowNull: false},
        speed: {type: DataTypes.INTEGER},
        driver_Email: {
          type: DataTypes.STRING,
          validate: {isEmail: true},
          lowercase: true,
        },
        passangers: {
          type: DataTypes.INTEGER},
        current_Loc: {
          type: DataTypes.STRING,
        },
        route_Id:{type:DataTypes.STRING}

      },
      {
        sequelize,
        modelName: 'busInRoad',
      },
  );

  return busInRoad;
};