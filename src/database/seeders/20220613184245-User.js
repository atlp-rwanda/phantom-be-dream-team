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
        name: 'Kwizera Steven',
        email: 'dreamtm87@gmail.com',
        phone:'0787239534',
        password:'phantom@123',
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

 