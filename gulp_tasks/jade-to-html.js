module.exports = jade;

function jade (gulp, plugins) {
  return function() {
    gulp.src('./app/**/*.jade')
    .pipe(plugins.jade())
    .pipe(gulp.dest('./.temp/templates/'))
  }
}