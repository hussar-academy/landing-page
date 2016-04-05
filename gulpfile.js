var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var connect = require('gulp-connect');

gulp.task("sass", function () {
  return gulp.src("./app/style.sass")
    .pipe(sass({
      includePaths: ['node_modules/foundation-sites/scss']
    }).on('error', sass.logError))
    .pipe(gulp.dest("./public/"));
});

gulp.task("jade", function() {
    return gulp.src("./app/index.jade")
        .pipe(jade())
        .pipe(gulp.dest("./public/"));
});

gulp.task("connect", function() {
  connect.server({
    root: "public",
    livereload: true
  });
});

gulp.task("html", function () {
  gulp.src("./public/index.html")
    .pipe(connect.reload());
});

gulp.task("css", function () {
  gulp.src("./public/style.css")
    .pipe(connect.reload());
});

gulp.task("images", function () {
  gulp.src("./app/images/*")
    .pipe(gulp.dest("./public/images/"));
});

gulp.task("watch", function() {
  gulp.watch("./app/images/*", ["images"]);
  gulp.watch("./app/*.sass", ["sass"]);
  gulp.watch("./app/*/*.jade", ["jade"]);
  gulp.watch("./public/index.html", ["html"]);
  gulp.watch("./public/style.css", ["css"]);
});

gulp.task("default", ["connect", "sass", "jade", "images", "watch"]);
