// Load .env variables
require('dotenv').config({path: __dirname+'/./../../'+process.env.NODE_ENV+'.env'});

module.exports = {
    apiURL: process.env.api_url,
    apiKey: process.env.api_key,
    host: process.env.host,
    port: process.env.port
}