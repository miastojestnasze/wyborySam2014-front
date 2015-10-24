module.exports = compileBowerCSS

function compileBowerCSS(gulp, plugins) {
  return function() {
    var gulpFilter = require('gulp-filter');
    var filterJS = gulpFilter('**/*.css', { restore: true });

    return gulp.src('./bower.json')
      .pipe(plugins.mainBowerFiles())
      .pipe(filterJS)
      .pipe(plugins.concatCss('vendor.min.css'))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest('./build'));
  }
}
