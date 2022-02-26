const { rates } = require('../handlers/handlers');

module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
      server.route([
        {
          method: 'GET',
          path: '/rates',
          handler: rates
        }
      ]);
    }
  }