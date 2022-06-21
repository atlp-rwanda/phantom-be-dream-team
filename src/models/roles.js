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
      roleId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },

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
      tableName: 'roles',
      modelName: 'Roles'
    }
  );
  return Roles;
};