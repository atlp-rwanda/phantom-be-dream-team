import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {

  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({User,routes}) {
      // define association here   
      Bus.belongsTo(User,{ foreignKey: "userId",as:"user" })
      Bus.belongsTo(routes,{ foreignKey: "routeId",as:"route" })
      
    }
    
  }
  Bus.init(
    { id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
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
      userId: {
        type: DataTypes.INTEGER,
        allowNull:true,
        defaultValue:null
      },
      routeId: {
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