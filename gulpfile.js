var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

gulp.task('serve', ['js'], function() {
	browserSync({
		server: "./bulid"
	});

	gulp.watch("bulid/js/*.js", ['js']);
	gulp.watch(["bulid/*html", "bulid/views/*html", "bulid/css/*.css"]).on('change', reload);

});

gulp.task('js', function() {
	return gulp.src('bulid/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('default', ['serve']);