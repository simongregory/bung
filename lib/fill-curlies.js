function fillCurlies(template, values) {
  return template.replace(/{(\w+)}/g, (match, key) => {
    let replacement = values[key];
    if (replacement === undefined) {
      console.warn('Template filler supplied with no value for key "%s"', key);
      replacement = match;
    }
    return replacement;
  });
}

module.exports = fillCurlies;
