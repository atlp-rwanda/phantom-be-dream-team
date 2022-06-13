module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        name: 'Jon Doe',
        email: 'jondoe@example.com',
        phone:'123457688',
        password:'34567dhhdhdh',
        status:'yes',
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
        password:'3456hhdhdh',
        status:'yes',
        last_login_at: new Date(),
        last_ip_address:'192.158. 1.38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

 