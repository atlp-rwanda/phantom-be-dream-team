import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({Role}) {
      // this.belongsTo(Roles, { foreignKey: "roleId"});
      this.belongsToMany(Role, { foreignKey: 'RoleId', through: 'RolesAndPermissions', as: 'role'});

      // define association here
    }
  }
  Permission.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
          
        name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
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
        modelName: 'Permission',
      },
  );

  return Permission;
};

