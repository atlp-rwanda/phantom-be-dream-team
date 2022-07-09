export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING,
        unique: true,
      },
      email: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING,
      },
     
      password: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING
      },
      last_login_at: {
        type: Sequelize.DATE
      },
      last_ip_address: {
        type: Sequelize.STRING
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};