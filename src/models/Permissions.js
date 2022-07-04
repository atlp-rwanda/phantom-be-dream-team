import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Permissions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Permissions.init(
      {
        PermissionsId: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true},
          
                PermissionsName: {
                  type: DataTypes.STRING,
                  allowNull: false
                 },
                 PermissionsDescription: {
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
                Id: {type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4,  foreignKey: true},
                // Permissions_roleId_fkey
      },
      {
        sequelize,
        modelName: 'Permissions',
      },
  );

  return Permissions;
};

// 'use strict';
// import { Model } from 'sequelize';
// export default (sequelize, DataTypes) => {
//   class Permissions extends Model {
    
//     static associate(models) {
    
//     }
//     toJSON() {
//       return {
//         ...this.get(),
//         id: undefined
//       };
//     }
//   }
//   Permissions.init(
//     {
//       PermissionsId: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4
//       },

//       PermissionsName: {
//         type: DataTypes.STRING,
//         allowNull: false
//        },
//        PermissionsDescription: {
//         type: DataTypes.STRING,
//         allowNull: false
//        },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
      
//     },
//     {
//       sequelize,
//       tableName: 'Permissions',
//       modelName: 'Permissions'
//     }
//   );
//   return Permissions;
// };

// 'use strict';
// import { Model } from 'sequelize';
// export default (sequelize, DataTypes) => {
//   class Permissions extends Model {
    
//     static associate(models) {
    
//     }
//     toJSON() {
//       return {
//         ...this.get(),
//         id: undefined
//       };
//     }
//   }
//   Permissions.init(
//     {
//         PermissionId: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4
//       },

//       PermissionName: {
//         type: DataTypes.STRING,
//         allowNull: false
//        },
//        PermissionDescription: {
//         type: DataTypes.STRING,
//         allowNull: false
//        },
//       createdAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
//       updatedAt: {
//         allowNull: false,
//         type: DataTypes.DATE
//       },
      
//     },
//     {
//       sequelize,
//       tableName: 'Permissions',
//       modelName: 'Permissions'
//     }
//   );
//   return Permissions;
// };