const bcrypt = require("bcryptjs/dist/bcrypt");

module.exports = {
 async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        name: 'Jon Doe',
        email: 'jondoe@example.com',
        phone:'123457688',
        password:await bcrypt.hash('34567dhhdhdh', 12),
        role:'admin',
        last_login_at: new Date(),
        last_ip_address:'192.158. 1.38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        name: 'Doe',
        email: 'doe@example.com',
        phone:'1457688',
        password:await bcrypt.hash('3456hhdhdh',12),
        role:'admin',
        last_login_at: new Date(),
        last_ip_address:'192.158. 1.38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  );
 },

  async down (queryInterface, Sequelize) { 
    await queryInterface.bulkDelete('Users', null, {});
  },
};

 