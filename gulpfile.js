var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var buildAppTaskList = [
  'templates',
  'copy-img',
  'compile-ng-app',
  'stylus',
  'clean-temp'
];

var buildWithLibs = [
  'templates',
  'compile-ng-app',
  'stylus',
  'clean-temp',
  'build-bower-libs'
];

function getTask(task) {
  return require('./gulp_tasks/' + task)(gulp, plugins);
}

gulp.task('angular-templates', getTask('angular-templates'));
gulp.task('copy-index', getTask('copy-index'));
gulp.task('copy-img', getTask('copy-img'));
gulp.task('templates', ['angular-templates', 'copy-index']);

gulp.task('compile-ng-app', getTask('compile-ng-app'));
gulp.task('compile-bower-scripts', getTask('compile-bower-scripts'));

gulp.task('stylus', getTask('stylus'));
gulp.task('compile-bower-styles', getTask('compile-bower-styles'));

gulp.task('copy-bootstrap-fonts', getTask('copy-bootstrap-fonts'));
gulp.task('clean-temp', ['angular-templates', 'compile-ng-app'], getTask('clean-temp'));

gulp.task('build', buildAppTaskList);
gulp.task('build-all', buildWithLibs);
gulp.task('build-bower-libs', ['compile-bower-scripts', 'compile-bower-styles', 'copy-bootstrap-fonts'])

gulp.task('watch', buildAppTaskList, function() {
  gulp.watch('./app/index.html', ['copy-index']);
  gulp.watch('./app/img/*', ['copy-img']);
  gulp.watch('./app/**/*.jade', ['angular-templates']);
  gulp.watch('./app/**/*.styl', ['stylus']);
  gulp.watch('./app/**/*.js', ['compile-ng-app']);
});

gulp.task('default', ['build']);
