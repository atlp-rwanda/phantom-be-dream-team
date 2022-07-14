import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class RolesAndPermissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate() {

      // define association here
    }
  }
  RolesAndPermissions.init(
      {
        RoleId: {
          allowNull: true,
          type: DataTypes.INTEGER
        },
        PermissionId: {
            allowNull: true,
            type: DataTypes.INTEGER
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
        modelName: 'RolesAndPermissions',
      },
  );

  return RolesAndPermissions;
};

