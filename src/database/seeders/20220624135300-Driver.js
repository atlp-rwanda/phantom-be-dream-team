import bcrypt from 'bcryptjs';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Drivers',
      [
        {
          id: 8,
          firstName: 'jean eric',
          lastName: 'TUYISHIMIRE',
          email: 'admin8@test.com',
          password: await bcrypt.hash('pass12345', 12),
          role: 'driver',
          Assigned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          firstName: 'kevin',
          lastName: 'kalimba',
          email: 'admin7@test.com',
          role: 'driver',
          password: await bcrypt.hash('pass12345', 12),
          role: 'driver',
          Assigned: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('drivers', null, {});
  },
};
