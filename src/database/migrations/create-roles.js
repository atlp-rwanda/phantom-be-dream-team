'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      roleName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },

      permissions: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false
      },
      // permissions: {
      //   type: DataTypes.ARRAY(DataTypes.STRING),
      //   allowNull: false,
      // },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('roles');
  }
};