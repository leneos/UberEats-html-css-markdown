var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'));
});