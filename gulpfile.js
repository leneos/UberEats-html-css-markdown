var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');
var cleanCSS = require('gulp-clean-css');

gulp.task('css', function () {
    var postcss = require('gulp-postcss');
    var sourcemaps = require('gulp-sourcemaps');

    return gulp.src('src/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('build/'));
});

gulp.task('imgmin', function () {
    gulp.src('src/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('build/img'))
});

gulp.task('htmlminify', function () {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
});

