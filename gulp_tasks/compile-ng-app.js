module.exports = compileNgApp;

function compileNgApp(gulp, plugins) {
  return function() {
    gulp.src('./app/**/*.js')
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.concat('app.min.js'))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.sourcemaps.init())
      .pipe(plugins.uglify())
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./build'));
  }
}