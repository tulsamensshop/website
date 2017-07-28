var gulp = require('gulp');
var compass = require('gulp-compass');
var watch = require('gulp-watch');

gulp.task('compass', function() {
  gulp.src('./*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './css',
      sass: './css/scss'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});

// Default task
gulp.task('default', ['compass', 'watch']);

// Watch
gulp.task('watch', function() {
    // Watch .scss files
    gulp.watch('./css/scss/*/*.scss', ['compass']);

});
