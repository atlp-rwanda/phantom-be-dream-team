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
          id: '1',
          origin: 'Nyabugogo',
          destination: 'nyamirambo',
          code: '402',
          distance: '35km',
          routeSlug: '30 min',
          coordinates: [123456789,456789],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '2',
          origin: 'Nyabugogo',
          destination: 'Town',
          code: '404',
          distance: '30km',
          routeSlug: '40 min',
          coordinates: [1234567489,4567389],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '3',
          origin: 'Kimironko',
          destination: 'nyamirambo',
          code: '422',
          distance: '55km',
          routeSlug: '60 min',
          coordinates: [1234526789,4656789],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '4',
          origin: 'Kanserege',
          destination: 'Rwarutabura',
          code: '421',
          distance: '13km',
          routeSlug: '10 min',
          coordinates: [4123456789,4567859],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '5',
          origin: 'Kicukiro',
          destination: 'Gasanze',
          code: '472',
          distance: '85km',
          routeSlug: '43 min',
          coordinates: [12345656789,456785679],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  },
};


