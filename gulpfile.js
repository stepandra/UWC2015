var gulp = require('gulp'),
	less = require('gulp-less'),
    notify = require('gulp-notify');
var refresh = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function () {
    return gulp.src('source/styles/style.less')
        .pipe(less()).on("error", notify.onError("Error: <%= error.message %>"))
        .pipe(autoprefixer())
        .pipe(gulp.dest('client/styles'))
        .pipe(refresh())
        .pipe(notify({ message:  'Styles task complete' }));
});

gulp.task('watch', function() {
	refresh.listen();

    gulp.watch('source/styles/**/*.less', ['styles']);
});

gulp.task('default', function(){

	gulp.start('watch');

});