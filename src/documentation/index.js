
import { users, usersDefinition } from './users';

const paths = { ...users };

const definitions = { ...usersDefinition };

const config = {
  swagger: '2.0',
  info: {
    title: 'Dream Team Phantom API ',
    description: 'This is team project,Dream team',
    version: '1.0.0',
    contact: {
      name: 'Phantom Developers',
      email: 'benafrica.009@gmail.com',
      url: 'localhost:3000/',
    },
    license: {
      name: 'Apache 2.0',
      url: 'http://www.apache.org/licenses/LICENSE-2.0.html',
    },
  },

  schemes: ['HTTP', 'HTTPS'],

  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
    ApiKeyAuth: {
      type: 'apiKey',
      name: 'refreshToken',
      in: 'header',
    },
  },

  servers: [
    {
      url: 'http://localhost:3000',
      name: 'DEV',
    },
  ],

  paths,
  definitions,
};

export default config;