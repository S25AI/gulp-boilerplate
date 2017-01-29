'use strict';

const gulp = require('gulp');
const stylus = require('gulp-stylus');
const sourcemaps = require('gulp-sourcemaps');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const babel = require('gulp-babel');

gulp.task('browserSync', () => {
	browserSync.init({
		server: {
			baseDir: 'public/build'
		}
	});
});

gulp.task('styl', () => {
	return gulp.src('./public/src/css/main.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus({
			compress: true
		}))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/build/css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('js', () => {
	return gulp.src('./public/src/**/*.js')
		.pipe(babel({ presets: ['es2015'] }))
		.pipe(gulp.dest('./public/build'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

gulp.task('libs', () => {
	return gulp.src([
		'node_modules/systemjs/dist/system.js',
		'node_modules/babel-polyfill/dist/polyfill.js'])
		.pipe(gulp.dest('./public/build/libs'));
});

gulp.task('watch', ['browserSync', 'styl', 'js'], () => {
	gulp.watch('./public/src/**/*.styl', ['styl']);
	gulp.watch('./public/src/**/*.js', ['js']);
});

gulp.task('default', cb => {
	runSequence(['styl', 'browserSync', 'watch'], ['js', 'libs'], cb);
});