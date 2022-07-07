module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Buses', // name of Source model
      'UserId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Buses', // name of Source model
      'UserId' // key we want to remove
    );
  }
};