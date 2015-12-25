'use strict';

var gulp 			= require('gulp'),
	browserSync 	= require('browser-sync').create(),
	reload      	= browserSync.reload,
	sass 			= require('gulp-sass'),
	autoprefixer 	= require('gulp-autoprefixer');


var path = {
		app: 		'app/',
		html: 		'app/**/*.html',
		sass: 		'app/sass/**/*.*',
		css: 		'app/css/',
		js: 		'app/js/**/*.js',
		img: 		'app/img/**/*.*',
		components: 'app/components/**/*.html',
		templates: 	'app/templates/**/*.html',
		fonts: 		'app/fonts/**/*.*'
}

gulp.task('sass', function() {
	return gulp.src(path.sass)
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 6', 'ie 9', 'opera 12.1', 'Firefox >= 20', 'ios 7', 'android 4.3', '>5%'))
		.pipe(gulp.dest(path.css))
		.pipe(reload({stream: true}));
});

gulp.task('server', ['sass'], function() {
	 browserSync.init({
    	port: 8089,
        server: path.app
    });

	 gulp.watch([path.html, path.js, path.img, path.components, path.templates, path.fonts])
	 	 .on('change', browserSync.reload);

	 gulp.watch(path.sass, ['sass']);
});