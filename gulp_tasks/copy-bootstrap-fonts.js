module.exports = cpFonts;

function cpFonts(gulp, plugins) {
  return function() {
    gulp.src('./bower_components/bootstrap/fonts/*')
    .pipe(gulp.dest('build/fonts'))
  }
}