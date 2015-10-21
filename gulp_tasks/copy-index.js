module.exports = cpIndex;

function cpIndex(gulp, plugins) {
  return function() {
    gulp.src('./app/index.html')
    .pipe(gulp.dest('build'))
  }
}