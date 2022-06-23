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
        role: 'admin',
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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};

 