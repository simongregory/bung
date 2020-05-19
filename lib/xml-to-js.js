const pify = require('pify');
const { Parser } = require('xml2js');

async function toJS(xml, options = {
  mergeAttrs: true,
  explicitArray: false
}) {
  const parser = new Parser(options);

  const json = await pify(parser.parseString)(xml);

  return json;
}

async function toJSStrict(xml, options = {
  mergeAttrs: false,
  explicitArray: true
}) {
  return toJS(xml, options);
}

module.exports = { toJS, toJSStrict };
