var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('./*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: './css',
      sass: './css/scss'
    }))
    .pipe(gulp.dest('app/assets/temp'));
});
