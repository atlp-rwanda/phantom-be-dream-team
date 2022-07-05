import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class AssignedBusesToDrivers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, {
        foreignKey: {
          name: 'UserId',
          allowNull: true,
        },
        as: 'Users',
      });
      this.belongsTo(models.Bus, {
        foreignKey: {
          name: 'BusId',
          allowNull: false,
        },
        as: 'Buses',
      });
    }
  }
  AssignedBusesToDrivers.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      UserId: DataTypes.INTEGER,
      BusId: {
        allowNull: true,
        type: DataTypes.STRING,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: 'AssignedBusesToDrivers',
    }
  );
  return AssignedBusesToDrivers;
};