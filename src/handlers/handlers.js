const { instance } = require('../lib/axios');
const config = require('../config/config-variables');
const rateObject = require('../helpers/rate');

const pairs = [
    { pair: 'EURUSD' },
    { pair: 'EURARS' },
    { pair: 'USDARS' },
    { pair: 'EURBRL' },
    { pair: 'USDBRL' },
    { pair: 'BRLARS' }
]

exports.rates = async (req, res) => {
  const fee = req.query.fee ? req.query.fee : 0;
  const default_base = 'EUR';
  let response = await instance.get('latest?access_key=' + config.apiKey);

  if (response.data && response.data.success === true){
    let originalRates = response.data.rates;
    let finalRates = [];

    for (let pair of pairs){
      if (pair.pair.substring(0, 3) === default_base){
        let rate = originalRates[pair.pair.substring(3, 6)];
        finalRates.push(new rateObject(pair.pair, rate, fee));
        pair.rate = rate;
      }
    }

    finalRates = finalRates.concat(pairs.filter(pair => {
      let base = pair.pair.substring(0, 3);   
      if (base !== default_base){
        return pair;
      }}).map(pair => {
        let base = pair.pair.substring(0, 3);
        let to = pair.pair.substring(3, 6);
        let newRate = originalRates[to] / originalRates[base];
        return new rateObject(pair.pair, newRate, fee);
    }));
    return res.response(finalRates).code(200).type('application/json');
  }
  return res.response().code(500);
}