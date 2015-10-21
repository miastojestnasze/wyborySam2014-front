var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var taskList = [
  'templates',
  'compile-ng-app',
  'stylus',
  'clean-temp'
];

function getTask(task) {
  return require('./gulp_tasks/' + task)(gulp, plugins);
}

gulp.task('jade-to-html', getTask('jade-to-html'));
gulp.task('angular-templates', ['jade-to-html'], getTask('angular-templates'));
gulp.task('copy-index', getTask('copy-index'));
gulp.task('templates', ['jade-to-html', 'angular-templates', 'copy-index']);


gulp.task('compile-ng-app', getTask('compile-ng-app'));


gulp.task('stylus', getTask('stylus'));

gulp.task('clean-temp', ['angular-templates', 'compile-ng-app'], getTask('clean-temp'));

gulp.task('build', taskList);

gulp.task('watch', taskList, function() {
  gulp.watch('./app/index.html', ['copy-index']);
  gulp.watch('./app/**/*.jade', ['templates']);
  gulp.watch('./app/**/*.styl', ['stylus']);
  gulp.watch('./app/**/*.js', ['compile-ng-app']);
});

gulp.task('default', ['build']);