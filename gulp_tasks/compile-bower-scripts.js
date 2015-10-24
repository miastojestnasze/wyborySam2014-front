module.exports = compileBowerJs

function compileBowerJs(gulp, plugins) {
  return function() {
    var gulpFilter = require('gulp-filter');
    var filterJS = gulpFilter('**/*.js', { restore: true });

    return gulp.src('./bower.json')
      .pipe(plugins.mainBowerFiles())
      .pipe(filterJS)
      .pipe(plugins.concat('vendor.min.js'))
      .pipe(plugins.uglify())
      .pipe(gulp.dest('./build'));
  }
}
