const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourceMaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imageMin = require('gulp-imagemin');

function comprimeImagens() {
    return gulp
        .src('./source/img/*')
        .pipe(imageMin())
        .pipe(gulp.dest('./bulid/img'));
}

function comprimeJavaScript() {
    return gulp
        .src('./source/js/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./bulid/js'));
}

function compilaSass() {
    return gulp
        .src('./source/css/style.scss')
        .pipe(sourceMaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourceMaps.write('./maps'))
        .pipe(gulp.dest('./bulid/css'));
}

exports.default = function () {
    gulp.watch('./source/css/*.scss', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/js/*.js', { ignoreInitial: false }, gulp.series(comprimeJavaScript));
    gulp.watch('./source/img/*', { ignoreInitial: false }, gulp.series(comprimeImagens));
}
