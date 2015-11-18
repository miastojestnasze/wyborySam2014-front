module.exports = cpIndex;

function cpIndex(gulp, plugins) {
  return function() {
    gulp.src('./app/img/*')
    .pipe(gulp.dest('build/img'));
  };
}
