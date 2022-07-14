import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Permission}) {
      // this.hasMany(Permissions, { foreignKey: "roleId" });
      // define association here
      // this.belongsToMany(Permissions, { through: RolesAndPermissions});
      this.belongsToMany(Permission, { foreignKey: 'PermissionId', through: 'RolesAndPermissions', as: 'permission'});
    }
  }
   Role.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
        
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      description: {
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
      modelName: 'Role',
    },
);

return Role;
};