'use strict'
const { Model } = require('sequelize')
// import model from '../models'
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ User }) {
      // define association here
      // Bus.associate = models => {
      //   Bus.belongsTo(models.User);
      // };
      
        this.belongsTo(User, { foreignKey: "userId",as:"user" });
      
     
    }
    // toJSON() {
    //   return {
    //     ...this.get(),
    //     id: undefined,
    //     UserId: undefined,
    //     createdAt: undefined,
    //     updatedAt:undefined,
    //   };
    // }
  
  }
  Bus.init(
    {
      plate: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            is: /^[R]*[A-Z]{2}[\w ][0-9]{3}[\w ][A-Z]{1}$/i,
            args: false,
            msg: 'Valid Plate number required'
          }
        },
        unique: { msg: 'plate number already in use!' }
      },
      busType: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            args: true,
            msg: 'bus type required'
          }
        }
      },
      seat: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            args: true,
            msg: 'Bus seat required'
          }
        }
      },
      isAssigned: {
        type: DataTypes.BOOLEAN, defaultValue: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull:true,
        defaultValue:null
      },
   
    }, {
      sequelize,
      modelName: 'Bus'
    })
  return Bus
}
