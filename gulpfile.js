var gulp = require('gulp');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
 
 // Minify HTML
gulp.task('minify-html', function() {
  return gulp.src('./source/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dist'));
});

// Minify CSS
gulp.task('minify-css', function() {
  return gulp.src('./source/scss/*.scss')
  	.pipe(sass())
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/css/'));
});

//Watch
gulp.task('watch', function(){
	gulp.watch('./source/scss/*.scss',['minify-css']);
	gulp.watch('./source/*.html',['minify-html']);
});