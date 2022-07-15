'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RolesAndPermissions', {
      RoleId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      }, 
      PermissionId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('RolesAndPermissions');
  }
};