const swaggerUI = require('swagger-ui-express');
const swaggerDocument = require('../swagger/openapi.json');

module.exports = swaggerUI.setup(swaggerDocument);