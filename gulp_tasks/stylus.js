module.exports = stylus;

function stylus(gulp, plugins) {
  var autoprefixer = require('autoprefixer-stylus');
  return function() {
    gulp.src('./app/**/style.styl')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus({
      compress: true,
      use: [autoprefixer('iOS >= 7', 'last 1 Chrome version')]
    }))
    .pipe(plugins.sourcemaps.write())
    .pipe(plugins.rename({basename: 'app.min'}))
    .pipe(gulp.dest('build'));
  }
}

