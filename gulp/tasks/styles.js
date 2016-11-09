var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync'),
    config      = require('../config.js');

gulp.task('sass', function () {
  gulp.src(config.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.sass.dist))
    .pipe(browserSync.stream({match: '**/*.css'}));
});
