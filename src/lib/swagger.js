const hapiSwagger = require('hapi-swagger');

module.exports = {
    plugin: hapiSwagger,
    options: {
        info: {
                title: 'Test API Documentation',
                version: '0.0.1',
            },
        }
};