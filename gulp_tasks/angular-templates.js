module.exports = angularTemplates;

function angularTemplates(gulp, plugins) {
  return function() {
   gulp.src('./.temp/templates/**/*.html')
    .pipe(plugins.angularTemplatecache({
      filename: 'templates.min.js'
    }))
    .pipe(plugins.uglify())
    .pipe(gulp.dest('build'))
  }
}