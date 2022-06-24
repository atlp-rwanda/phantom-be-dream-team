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
      'AssignBustoRoutes',
      [
        {
          uuid: "9e3d2a6c-5484-4d86-8eb0-40098cd7a590",
          routeName: "nyamirambo-downtown",
          routeCode: "401",
          startingPoint: "nyamirambo",
          endingPoint: "downtown",
          plateNumber: "raa003a",
          distance:"50km",
          duration: "1h",
          busId:"8e3d2a6c-5484-4d86-8eb0-40098cd7a530",
          createdAt: new Date(),
          updatedAt: new Date(),
        }

      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('AssignBustoRoutes', null, {});
  },
};
