var gulp = require('gulp'),
	less = require('gulp-less'),
    notify = require('gulp-notify');
var refresh = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('styles', function () {
    return gulp.src('source/styles/style.less')
        .pipe(less()).on("error", notify.onError("Error: <%= error.message %>"))
        .pipe(autoprefixer())
        .pipe(gulp.dest('client/styles'))
        .pipe(refresh())
        .pipe(notify({ message:  'Styles task complete' }));
});

gulp.task('app', function(){
    return gulp.src('source/application/**/*.js')
            .pipe(concat('application.js'))
            .pipe(gulp.dest('client/assets/js'))
            .pipe(refresh())
            .pipe(notify({ message:  'App task complete' }));
});

gulp.task('watch', function() {
	refresh.listen();

    gulp.watch('source/styles/**/*.less', ['styles']);
    gulp.watch('source/application/**/*.js', ['app']);
});

gulp.task('default', function(){

	gulp.start('watch');

});