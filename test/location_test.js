let request = require('sync-request');

function getLocation() {
  let res = request('GET', 'https://www.googleapis.com/geolocation/v1/geolocate?key=key');
  let location = JSON.parse(res.getBody().toString('utf8'));

  return location;
}

console.log(getLocation())
