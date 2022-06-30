import bcrypt from 'bcryptjs';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
        'Users',
        [
          {
            id: 8,
            firstName: 'arthur',
            lastName: 'junior',
            email: 'admin8@test.com',
            role: 'admin',
            password: await bcrypt.hash('pass12345', 12),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            id: 7,
            firstName: 'juno',
            lastName: 'rwanda',
            email: 'admin7@test.com',
            role: 'admin',
            password: await bcrypt.hash('pass12345', 12),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
