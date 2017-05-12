//requiring all tasks
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var strip = require('gulp-strip-comments');
var del = require('del');
var runSequence = require('run-sequence');

// config
const appDir = 'app'; // application location
const distDir = 'dist'; // compiled code distribution build directry (not tracked)
const tmpDir = 'tmp';  // gulp working directory (not tracked)

//init browser-sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: appDir
    },
  })
});

//temp directory tasks -- LS: Include this in your processes, and use the tmp directory as a stage env for all your compiling.
gulp.task('clean:tmp',function() {
  return del.sync(tmpDir);
});
gulp.task('create-tmp', ['clean:tmp'], function() {
  return gulp.src(appDir + '/**/*')
    .pipe(gulp.dest(tmpDir));
});

//converting sass to css, also reloading the page if a change is made & saved
gulp.task('sass', function() {
  return gulp.src(appDir + '/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest(appDir + '/css'))
    .pipe(browserSync.reload({
      stream:true
    }))
});

//watching for any changes in the below files, will refresh the browser on save
gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch(appDir + '/scss/**/*.scss', ['sass']);
  gulp.watch(appDir + '/*.html', browserSync.reload);
  gulp.watch(appDir + 'js/*.js', browserSync.reload);
});

//stripping out all comments
gulp.task('strip', function() {
  return gulp.src(distDir + '/*.html')
    .pipe(strip())
    .pipe(gulp.dest(distDir));
});

//cleaning everything before resaving everything
gulp.task('clean:dist', function() {
  return del.sync(distDir);
});

//all of the sequences of tasks & individual commands to run in the cli
//builds code files
gulp.task('build', function(callback) {
  runSequence('clean:dist', 'sass', 'strip', callback)
});

//dev tasks
gulp.task('dev', function(callback) {
  runSequence('create-tmp', ['sass', 'browserSync', 'watch']), callback
});

//default task
gulp.task('default',['build']);
