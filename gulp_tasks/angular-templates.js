module.exports = angularTemplates;

function angularTemplates(gulp, plugins) {
  return function() {
   gulp.src('./app/**/*.jade')
    .pipe(plugins.jade())
    .pipe(plugins.angularTemplatecache({
      module: 'wyborySam2014',
      filename: 'templates.min.js'
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('build'))
  }
}