const fillCurlies = require('./lib/fill-curlies');
const getDayAbbrName = require('./lib/get-day-abbr-name');
const { toJS, toJSStrict } = require('./lib/xml-to-js');
const ropeyDateToEpoch = require('./lib/ropey-date-to-epoch');

function bung() {
  // It doesn't do much so
  return 'just bung it there for now...';
}

module.exports = { bung, fillCurlies, toJS, toJSStrict, getDayAbbrName, ropeyDateToEpoch };
