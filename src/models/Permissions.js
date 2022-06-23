'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
  class Permissions extends Model {
    
    static associate(models) {
    
    }
    toJSON() {
      return {
        ...this.get(),
        id: undefined
      };
    }
  }
  Permissions.init(
    {
        PermissionId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },

      PermissionName: {
        type: DataTypes.STRING,
        allowNull: false
       },
       PermissionDescription: {
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
      tableName: 'Permissions',
      modelName: 'Permissions'
    }
  );
  return Permissions;
};