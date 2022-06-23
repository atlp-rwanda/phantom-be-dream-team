'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert(
      'Routes',
      [
        {
          id: 2,
          name: 'downtown-nyamirambo',
          routeCode: '401',
          startLocation: 'downtown',
          endLocation: 'nyamirambo',
          distance: '30km',
          duration: '1h',
          createdAt: new Date(),
          updatedAt: new Date(),
        }

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  },
};
