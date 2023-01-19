const swaggerAutogen = require('swagger-autogen')({openapi: '3.0.0'});

const doc = {
    info: {
        version: '',      // by default: '1.0.0'
        title: 'University API',        // by default: 'REST API'
        description: 'Web application for university operation',  // by default: ''
    },
    host: '',      // by default: 'localhost:3000' -- NO! by default empty (but used current host)!
    basePath: '',  // by default: '/'
    schemes: [],   // by default: ['http']
    consumes: [],  // by default: ['application/json']
    produces: [],  // by default: ['application/json']
    tags: [        // by default: empty Array
    {
        name: 'Users',
        description: 'Users API',
      },
      {
        name: 'Speciality',
        description: 'Speciality API',
      },
      {
        name: 'catalog',
        description: 'catalog API',
      },
    
      {
        name: 'faculties',
        description: 'faculties API',
      },
      {
        name: 'feedback',
        description: 'feedback API',
      },
      {
        name: 'Tests',
        description: 'Tests API',
      },
      {
        name: 'Users_info',
        description: 'Users_info',
      },
      {
        name: 'Speciality_test',
        description: 'Speciality_test API',
      },
      {
        name: 'Login',
        description: 'Login API',
      }
     
        // { ... }
    ],
    securityDefinitions: {
        bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT'
        }
    },  // by default: empty object (Swagger 2.0)
    definitions: {},          // by default: empty object
    components: {}            // by default: empty object (OpenAPI 3.x)
};


const outputFile = 'swagger/openapi.json';
const endpointsFiles = ['loader/index.js'];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);