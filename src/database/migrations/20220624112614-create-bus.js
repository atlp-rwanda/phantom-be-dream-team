'use strict'

const sequelize = require("sequelize")

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Buses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plate: {
        type: Sequelize.STRING,
        notEmpty: true,
        unique: true
      },
      busType: {
        type: Sequelize.STRING,
        notEmpty: true
      },
      seat: {
        type: Sequelize.INTEGER,
        notEmpty: true
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:true,
        defaultValue:null
      },
      routeId: {
        type: Sequelize.INTEGER,
        allowNull:true,
        defaultValue:null
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Buses')
  }
}