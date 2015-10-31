module.exports = compileBowerCSS

function compileBowerCSS(gulp, plugins) {
  return function() {
    var gulpFilter = require('gulp-filter');
    var filter = gulpFilter('**/*.css');

    return gulp.src('./bower.json')
      .pipe(plugins.mainBowerFiles())
      .pipe(filter)
      .pipe(plugins.concatCss('vendor.min.css'))
      .pipe(plugins.minifyCss())
      .pipe(gulp.dest('./build/css'));
  }
}
