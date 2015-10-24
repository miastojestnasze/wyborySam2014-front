var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var buildAppTaskList = [
  'templates',
  'compile-ng-app',
  'stylus',
  'clean-temp'
];

var buildWithLibs = [
  'templates',
  'compile-ng-app',
  'stylus',
  'clean-temp',
  'compile-bower-styles',
  'compile-bower-scripts'
];

function getTask(task) {
  return require('./gulp_tasks/' + task)(gulp, plugins);
}

gulp.task('angular-templates', getTask('angular-templates'));
gulp.task('copy-index', getTask('copy-index'));
gulp.task('templates', ['angular-templates', 'copy-index']);

gulp.task('compile-ng-app', getTask('compile-ng-app'));
gulp.task('compile-bower-scripts', getTask('compile-bower-scripts'));

gulp.task('stylus', getTask('stylus'));
gulp.task('compile-bower-styles', getTask('compile-bower-styles'));

gulp.task('clean-temp', ['angular-templates', 'compile-ng-app'], getTask('clean-temp'));

gulp.task('build', buildAppTaskList);
gulp.task('build-all', buildWithLibs);
gulp.task('build-bower-libs', ['compile-bower-scripts', 'compile-bower-styles'])

gulp.task('watch', buildAppTaskList, function() {
  gulp.watch('./app/index.html', ['copy-index']);
  gulp.watch('./app/**/*.jade', ['angular-templates']);
  gulp.watch('./app/**/*.styl', ['stylus']);
  gulp.watch('./app/**/*.js', ['compile-ng-app']);
});

gulp.task('default', ['build']);