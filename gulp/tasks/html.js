var gulp        = require('gulp'),
    jade        = require('gulp-jade'),
    rename      = require("gulp-rename"),
    requireDir  = require('require-dir'),
    browserSync = require('browser-sync'),
    config      = require('../config.js'),
    fs          = require('fs'),
    path        = require('path'),
    clean       = require('gulp-clean');

var languages = requireDir(process.cwd() + '/src/i18n/');
var defaultLanguage = "en";

gulp.task('html:clean', function(){
  return gulp.src('public/**/*.html')
    .pipe(clean());
});

gulp.task('html',['html:clean'], function(data){
  var stream;
  Object.keys(languages).forEach(function(language){
    stream = gulp.src(['src/views/*.jade', '!src/views/includes'])
            .pipe(jade({
              pretty: true,
              locals: {
                content: languages[language],
                context_path: (function(){
                  if(process.env.NODE_ENV == 'development') {
                    return '';
                  }
                  if(process.env.NODE_ENV == 'production') {
                    return '/rotfather';
                  }
                })()
              }
            }))
    if(language == defaultLanguage) {
      stream.pipe(gulp.dest('public/'));
    }
    else {
      stream.pipe(gulp.dest('public/'+language));
    }
  });
  return stream;
});
