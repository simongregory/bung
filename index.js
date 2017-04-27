const fillCurlies = require('./lib/fill-curlies');
const getDayAbbrName = require('./lib/get-day-abbr-name');
const toJS = require('./lib/xml-to-js');

function bung() {
  // It doesn't do much so
  return 'just bung it there for now...';
}

module.exports = { bung, fillCurlies, toJS, getDayAbbrName };
