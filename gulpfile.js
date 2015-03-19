// all gulp tasks are located in the ./build/tasks directory
// gulp configuration is in files in ./build directory
//require('require-dir')('build/tasks');

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    exec = require('gulp-exec');
var gulp = require('gulp');
var browserSync = require('browser-sync'); 

gulp.task('dev', function () {
    return gulp.src(['!./**/*.d.ts', '!./**/tsc/**/*','./**/src/*.ts'])
        //.pipe(watch('**/*.ts'))
        .pipe(exec('node tsc/tsc.js --target es5 -m amd <%= file.path %>'))
        .pipe(exec.reporter());
});




gulp.task('serve', ['dev'], function(done) {
  browserSync({
    open: false,
    port: 9000,
    server: {
      baseDir: ['.'],
      middleware: function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
      }
    }
  }, done);
});