/**
 * Created by Elvin on 26.12.2017.
 */
var gulp              = require("gulp"),
    sass              = require("gulp-sass"),
    livereload        = require("gulp-livereload"),
    autoprefixer      = require("gulp-autoprefixer"),
    concat            = require("gulp-concat");


//Задачи
gulp.task('css', function () {

});




//Отслеживание изменений
gulp.task('dev', function () {
    livereload.listen();

    gulp.watch([
    'assets/css/*.css'
    ], function (event) {}).on('change', livereload.changed);
});