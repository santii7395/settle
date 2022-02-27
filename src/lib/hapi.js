const Hapi = require('@hapi/hapi');
const inert = require('@hapi/inert');
const vision = require('@hapi/vision');
const configVariables = require('../config/config-variables');
const routes = require('../routes/routes');
const swagger = require('./swagger');

const server = Hapi.server({
  port: configVariables.port,
  host: configVariables.host,
  app: {}
});

const initialize = async () => {
    try {
      await server.register(routes);
      await server.register([inert,
        vision,
        swagger
      ]);
      await server.start();
      console.log(`Servidor corriendo en: ${server.info.uri}`);
    } catch (error) {
      console.log(error);
      console.log('Error al iniciar el servidor Hapi');
    }
  };

module.exports = initialize;