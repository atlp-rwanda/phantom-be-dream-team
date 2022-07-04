import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
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
// 'use strict';
// import { Model } from 'sequelize';
// export default (sequelize, DataTypes) => {
//   class Roles extends Model {
    
//     static associate(models) {
    
//     }
//     toJSON() {
//       return {
//         ...this.get(),
//         id: undefined
//       };
//     }
//   }
//   Roles.init(
//     {
//       roleId: {
//         type: DataTypes.UUID,
//         defaultValue: DataTypes.UUIDV4
//       },

//       roleName: {
//         type: DataTypes.STRING,
//         allowNull: false
//        },
//        roleDescription: {
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
//       tableName: 'Roles',
//       modelName: 'Roles'
//     }
//   );
//   return Roles;
// };