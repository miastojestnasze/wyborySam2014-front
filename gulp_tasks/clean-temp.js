module.exports = cleanTemplates;

function cleanTemplates(gulp, plugins) {
  var del = require('del');
  return function() {
    return del(['.temp/']).then(function (paths) {
        console.log('Deleted files/folders:\n', paths.join('\n'));
    });
  }
}