'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AssignBustoRoutes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      routeName: {
        type: Sequelize.STRING
      },
      routeCode: {
        type: Sequelize.STRING
      },
      startingPoint: {
        type: Sequelize.STRING
      },
      endingPoint: {
        type: Sequelize.STRING
      },
      plateNumber: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      busId: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('AssignBustoRoutes');
  }
};