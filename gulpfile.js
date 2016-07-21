/// <binding BeforeBuild='default' />
var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
    sass: ['./scss/**/*.scss'],
    scripts: [
         './www/**/*.js',
         './www/js/lib/*.js',
         '!./www/js/app.js',
         '!./www/lib/**'
    ]
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task("combine-and-uglify", function () {
    gulp.src(paths.scripts)
        .pipe(concat('combined.js'))
        //.pipe(uglify())
        .pipe(gulp.dest('min/scripts'));
});

//gulp.task('scripts', function () {
//    return gulp.src(paths.scripts)
//    .pipe(sourcemaps.init())
//    .pipe(coffee())
//    .pipe(uglify())
//    .pipe(concat('all.min.js'))
//    .pipe(sourcemaps.write())
//    .pipe(gulp.dest('build/js'));
//});
