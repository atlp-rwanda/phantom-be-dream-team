module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        id: 1,
        names: 'John ',
        phone: '07835667',
        email: 'jondoe@example.com',
        password:'34567dhhdhdh',
        role: 'driver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        names: 'Kwizera ',
        phone: '04567890',
        email: 'dreamtm87@gmail.com',
        password:'phantom@123',
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        names: 'Rukundo ',
        phone: '0787633333',
        email: 'gerukundo14@gmail.com',
        password:'phantom@12342',
        role: 'driver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {},
  ),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {}),
};