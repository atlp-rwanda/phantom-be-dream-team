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
      'Buses',
      [
        {
          id: "125",
            busType:'coaster',
            plate:'raa003a',
            seat:'30',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: "126",
            busType:'youtong',
            plate:'raa045a',
            seat:'60',
          createdAt: new Date(),
          updatedAt: new Date(),
        }
   
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buses', null, {});
  },
};