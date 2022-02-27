const Joi = require('joi');
const { rates } = require('../handlers/handlers');

module.exports = {
    name: 'ApiRoutes',
    register: async (server, options) => {
      server.route([
        {
          method: 'GET',
          path: '/rates',
          options: {
            tags: ['api'], // ADD THIS TAG
            handler: rates,
            validate: {
              query: Joi.object({
                  fee: Joi.number()
              })
            },
            response: {
              status: {
                200: Joi.array().items(Joi.object(
                  {
                    Pair: Joi.string(), 
                    Original_Rate: Joi.number(), 
                    Fee: Joi.number(), 
                    Fee_amount: Joi.number(), 
                    Rate_with_markup_fee: Joi.number()
                  }).label('pair'))
              }
          }
          }
        }
      ]);
    }
  }