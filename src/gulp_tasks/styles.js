const gulp = require('gulp');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const concatCss = require('gulp-concat-css');

const conf = require('../conf/gulp.conf');

gulp.task('vendor', function () {
  return gulp.src(conf.path.src('**/*.css'))
    .pipe(concatCss('vendor.css'))
    .pipe(gulp.dest(conf.path.tmp()));
});

gulp.task('custom', function () {
  return gulp.src(conf.path.src('index.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})).on('error', conf.errorHandler('Sass'))
    .pipe(postcss([autoprefixer()])).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(conf.path.tmp()))
    .pipe(browserSync.stream());
});

gulp.task('resources', function () {
  return gulp.src(conf.path.src('assets/**/*'), {base: conf.path.src()})
    .pipe(gulp.dest(conf.path.tmp()));
});

gulp.task('styles', gulp.series('vendor', 'custom', 'resources'));

