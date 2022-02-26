const axios = require('axios');
const config = require('../config/config-variables');

exports.instance = axios.create({
    baseURL: config.apiURL,
    timeout: 10000,
    headers: {}
});
