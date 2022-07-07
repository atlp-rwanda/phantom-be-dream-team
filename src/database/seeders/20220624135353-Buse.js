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
            // company:'ritco',
            busType:'coaster',
            plate:'raa003a',
            seat:'30',
            // manufacturer:'benz',
            // capacity:30,
            // yearOfManufacturing:2000,
            // userId:2,
            // isAssigned: false,
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
