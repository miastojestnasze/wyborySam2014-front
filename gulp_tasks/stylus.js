module.exports = stylus;

function stylus(gulp, plugins) {
  return function() {
    gulp.src('./app/**/style.styl')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus({
      compress: true
    }))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('build'));

    // gulp.src('build/style.css')
    // .pipe(plugins.rename({basename: 'test'}))
    // .pipe(gulp.dest('./build'));
  }
}

