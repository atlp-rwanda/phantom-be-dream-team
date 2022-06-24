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
          id:2,
          routeName: "nyamirambo-downtown",
          routeCode: "401",
          startingPoint: "nyamirambo",
          endingPoint: "downtown",
          plateNumber: "raa003a",
          distance:"50km",
          duration: "1h",
          busId:"002",
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
