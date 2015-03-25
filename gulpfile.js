var gulp = require('gulp'),
	less = require('gulp-less'),
    notify = require('gulp-notify');
var refresh = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');

gulp.task('index', function () {
    return gulp.src('source/styles/index.less')
        .pipe(less()).on("error", notify.onError("Error: <%= error.message %>"))
        .pipe(autoprefixer())
        .pipe(gulp.dest('client/styles'))
        .pipe(refresh())
        .pipe(notify({ message:  'Styles task complete' }));
});


gulp.task('dashboard', function () {
    return gulp.src('source/styles/dashboard.less')
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

    gulp.watch('source/styles/**/*.less', ['index', 'dashboard']);
    gulp.watch('source/application/**/*.js', ['app']);
});

gulp.task('build', function(){
    gulp.start('index','dashboard','app');
});

gulp.task('default', function(){

	gulp.start('watch');

});