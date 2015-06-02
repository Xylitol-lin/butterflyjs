var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

gulp.task('serve', ['js'], function() {
	browserSync({
		server: "./build"
	});

	gulp.watch("build/js/*.js", ['js']);
	gulp.watch(["build/*html", "build/views/*html", "build/css/*.css"]).on('change', reload);

});

gulp.task('js', function() {
	return gulp.src('build/js/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({
			stream: true
		}));
});

gulp.task('default', ['serve']);