const pify = require('pify');
const { Parser } = require('xml2js');

async function toJS(xml) {
  const parser = new Parser({
    mergeAttrs: true,
    explicitArray: false
  });

  const json = await pify(parser.parseString)(xml);

  return json;
}

module.exports = toJS;
