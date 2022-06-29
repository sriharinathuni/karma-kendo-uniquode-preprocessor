// PUBLISH DI MODULE

module.exports = {
  'preprocessor:karma-uniquode-preprocessor': ['factory', require('./templateScriptToTemplateCache')]
}
