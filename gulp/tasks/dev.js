var gulp        = require('gulp'),
    browserSync = require('browser-sync');

// Static server
gulp.task('dev', ['watch', 'browser-sync'], function(){
  process.NODE_ENV = 'development';
});
