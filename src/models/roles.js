'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Roles extends Model {
    
    static associate(models) {
    
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined
      };
    }
  }
  Roles.init(
    {
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },

      roleName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
        validate: {
          notNull: { msg: 'Role must have permissions' },
          notEmpty: { msg: 'permissions must not be empty' }
        }
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      tableName: 'roles',
      modelName: 'Roles'
    }
  );
  return Roles;
};