let request = require('sync-request');

let res = request('GET', 'https://api.darksky.net/forecast/82561398d6aaa5940ac45a35b47191bf/42.3601,-71.0589');
let weather = JSON.parse(res.getBody().toString('utf8'));

module.exports = weather;
