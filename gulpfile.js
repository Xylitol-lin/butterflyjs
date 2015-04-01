var gulp = require('gulp');
var jshint =  require('gulp-jshint');
// var stylish = require('jshint-stylish');

gulp.task('watch', function () {
	gulp.watch('bulid/js/*js', ['js']);
});

gulp.task('js', function () {
	return gulp.src('bulid/js/*js')
				.pipe(jshint())
				.pipe(jshint.reporter('jshint-stylish'));

});

gulp.task('default', ['watch']);