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
          uuid: "8e3d2a6c-5484-4d86-8eb0-40098cd7a530",
            company:'ritco',
            type:'coaster',
            plateNumber:'raa003a',
            manufacturer:'benz',
            capacity:30,
            yearOfManufacturing:2000,
            userId:2,
            isAssigned: false,
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

