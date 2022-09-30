module.exports = function(config) {
  let handlebars = require('handlebars');
  config.setLibrary('hbs', handlebars);
  config.addPassthroughCopy({
    './src/css/': './css/'
  });

  config.addHandlebarsHelper('log', function(data) {
    console.log(data);
  });

  config.addWatchTarget('./src/css/');

  return {
    dir: {
      input: 'src/views',
      includes: '../includes',
      layouts: '../layouts',
      output: 'dist',
      data: '../data',
    },
    templateFormats: ['hbs', 'md', '11ty.js'],
    htmlTemplateEngine: 'hbs',
  };
}
