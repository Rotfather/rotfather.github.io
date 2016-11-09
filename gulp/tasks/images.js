var gulp        = require('gulp');

gulp.task('images', function () {
  gulp.src('src/images/**/*')
    .pipe(gulp.dest('public/assets/images'))
});
