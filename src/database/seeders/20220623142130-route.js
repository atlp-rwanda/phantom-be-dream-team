'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
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
          uuid: "9e3d2a6c-5484-4d86-8eb0-40098cd7a540",
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


