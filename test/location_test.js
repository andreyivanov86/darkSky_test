let request = require('sync-request');

function getLocation() {
  let res = request('GET', 'https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyD9nOR4O4M91528HPDhz7X87MDm6-xuV9M');
  let location = JSON.parse(res.getBody().toString('utf8'));

  return location;
}

console.log(getLocation())
