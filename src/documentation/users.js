
export const users = {
    '/api/v1/users/register': {
      post: {
        tags: ['Users'],
        summary: 'CREATE',
        description: 'CREATE',
        operationId: 'addUser',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'body',
            in: 'body',
            description: 'Create user',
            required: true,
            schema: {
              $ref: '#/definitions/Register',
            },
          },
     
        ],
        responses: {
          200: {
            description: 'Success',
          },
          400: {
            description: 'Bad request',
          },
          500: {
            description: 'Internal server error',
          },
        },
      },
    },
  
    '/api/v1/users/': {
      get: {
        tags: ['Users'],
        summary: 'GET_ALL',
        description: 'GET_ALL',
        operationId: 'findAll',
        produces: ['application/json'],
     
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
    '/api/v1/users/:id': {
      delete: {
        tags: ['Users'],
        summary: 'DELETE',
        description: 'DELETE',
        operationId: 'delete',
        consumes: ['application/json'],
        produces: ['application/json'],
        parameters: [
          {
            name: 'Accept-Language',
            in: 'header',
            description: 'the Accept-Language',
            required: false,
            type: 'string',
          },
        ],
        responses: {
          200: {
            description: 'OK',
            schema: {
              type: 'string',
            },
          },
        },
      },
    },
  };
  
  export const usersDefinition = {
    Register: {
      type: 'object',
      in: 'body',
      required: [
        'firstName',
        'lastName',
        'email',
        'role',
      ],
      properties: {
        firstName: {
          type: 'string',
        },
        lastName: {
          type: 'string',
        },
        email: {
          type: 'string',
        },
        role: {
          type: 'string',
        },
        
      },
    },
  };