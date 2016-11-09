var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    config      = require('../config.js');


// Static server
gulp.task('server', ['watch'], function() {
  process.env.NODE_ENV = 'development';
	browserSync.init({
		server: {
			baseDir: 'public/',
      routes: {
        "/rotfather" : "public"
      }
    }
	});

  console.log('listening on port 3000 in ' + process.env.NODE_ENV);
});
