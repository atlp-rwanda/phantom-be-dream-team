'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('routes', {
      routeId: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      origin: {
        type: Sequelize.STRING,
      },
      destination: {
        type: Sequelize.STRING,
      },
      code: {
        type: Sequelize.STRING,
      },
      distance: {
        type: Sequelize.STRING,
      },
      routeSlug: {
        type: Sequelize.STRING,
        unique: true,
      },
      coordinates: {
        type: Sequelize.ARRAY(Sequelize.DECIMAL),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('routes');
  },
};