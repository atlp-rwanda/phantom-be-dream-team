import {Model} from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  // eslint-disable-next-line require-jsdoc
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  User.init(
      {
        firstName: {type: DataTypes.STRING, allowNull: false},
        lastName: {type: DataTypes.STRING, allowNull: false},
        email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
          validate: {isEmail: true},
          lowercase: true,
        },
        role: {type: DataTypes.STRING, allowNull: false},
        password: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {min: 4},
        },
      },
      {
        sequelize,
        modelName: 'User',
      },
  );

  return User;
};
