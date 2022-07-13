import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Permissions}) {
      this.belongsTo(Permissions, { foreignKey: "Id", as: "Permissions_roleId_fkey" });
      // define association here
    }
  }
   Roles.init(
    {
      id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
      roleName: {
                  type: DataTypes.STRING,
                  allowNull: false
                 },
                 roleDescription: {
                  type: DataTypes.STRING,
                  allowNull: false
                 },
                createdAt: {
                  allowNull: false,
                  type: DataTypes.DATE
                },
                updatedAt: {
                  allowNull: false,
                  type: DataTypes.DATE
                },
    },
    {
      sequelize,
      modelName: 'Roles',
    },
);

return Roles;
};