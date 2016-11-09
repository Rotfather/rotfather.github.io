var gulp        = require('gulp'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    babelify    = require('babelify'),
    buffer      = require('vinyl-buffer'),
    rename      = require('gulp-rename'),
    sourceMaps  = require('gulp-sourcemaps'),
    browserSync = require('browser-sync'),
    config      = require('../config.js');
    requireDir  = require('require-dir');
    clean       = require('gulp-clean');

gulp.task('scripts:clean', function(){
  return gulp.src('public/assets/js/bundle.js')
    .pipe(clean());
});

gulp.task('scripts', ['scripts:clean'], function(){
  browserify(config.javascript.src)
    .transform(babelify,{ presets : [ 'es2015' ] })
    .bundle()
    .pipe(source(config.javascript.mainFile))
    .pipe(buffer())
    .pipe(rename(config.javascript.distFile))
    .pipe(sourceMaps.init({ loadMaps : true }))  // Strip inline source maps
    .pipe(sourceMaps.write('./maps'))
    .pipe(gulp.dest(config.javascript.dist))
    .pipe(browserSync.stream({match: '**/*.js'}));

  gulp.src('src/js/youtubeLoader.js')
    .pipe(gulp.dest('public/assets/js'))
});
