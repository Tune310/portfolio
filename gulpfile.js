var gulp = require('gulp');
var scss = require('gulp-sass');
var watch = require('gulp-watch');
var bourbon = require("node-bourbon").includePaths;
var webserver = require('gulp-webserver');
var jshint = require('gulp-jshint');

// Compile SASS files
// gulp.task("default", function() {
//   gulp.src("public/assets/styles/app.scss")
//       .pipe(sass({
//         includePaths: bourbon
//       }))
//       .pipe(gulp.dest("public/assets/"))
// });

// gulp.task('stream', function () {
//     // Endless stream mode 
//     return watch('css/**/*.css', { ignoreInitial: false })
//         .pipe(gulp.dest('build'));
// });
 
// gulp.task('callback', function () {
//     // Callback mode, useful if any plugin in the pipeline depends on the `end`/`flush` event 
//     return watch('css/**/*.css', function () {
//         gulp.src('css/**/*.css')
//             .pipe(gulp.dest('build'));
//     });
// });


gulp.task('scss', function() {
    return gulp.src('public/assets/styles/app.scss')
        .pipe(scss({
        errLogToConsole: true,
        includePaths: ['styles'].concat(bourbon)
    }))
        .pipe(gulp.dest("public/assets/"))
});

// setup our webserver
gulp.task('webserver', function() {
    gulp.src('.')
        .pipe(webserver({
        livereload: true,
        open: true
    }));
});


gulp.task('jshint', function() {
    return gulp.src('public/assets/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// watch our scss files for changes
gulp.task('watch', function() {
    gulp.watch('public/assets/styles/**/*.scss', ['scss']);
    gulp.watch('scripts/*.js', ['jshint']);
});

// run our tasks on running 'gulp' from the command line
gulp.task('default', ['webserver', 'watch']);