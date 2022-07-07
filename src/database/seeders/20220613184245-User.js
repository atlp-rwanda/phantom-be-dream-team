module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        firstName: 'John ',
        lastName: 'Doe',
        email: 'jondoe@example.com',
        password:'34567dhhdhdh',
        role: 'driver',
        // name: 'Jon Doe',
        email: 'jondoe@example.com',
        // phone:'123457688',
        password:'34567dhhdhdh',
        // status:'yes',
        // last_login_at: new Date(),
        // last_ip_address:'192.158. 1.38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        firstName: 'Kwizera ',
        lastName: 'Steven',
        email: 'dreamtm87@gmail.com',
        password:'phantom@123',
        role: 'admin',
        // name: 'Kwizera Steven',
        email: 'dreamtm87@gmail.com',
        // phone:'0787239534',
        password:'phantom@123',
        // status:'yes',
        // last_login_at: new Date(),
        // last_ip_address:'192.158. 1.38',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

 