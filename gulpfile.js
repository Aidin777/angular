/**
 * Created by Elvin on 26.12.2017.
 */
var gulp              = require("gulp"),
    sass              = require("gulp-sass"),
    livereload        = require("gulp-livereload"),
    autoprefixer      = require("gulp-autoprefixer"),
    concat            = require("gulp-concat"),
    browserify        = require("browserify"),
    vinylSource       = require("vinyl-source-stream");



//Задачи
gulp.task('css', function () {

});
//bundle - склейка файлов
//Название comdined.js
//место для хранения build
gulp.task('js', function () {

        return browserify('./assets/js/bootstrap.js')
            .bundle().on('error', function(err){
                console.log(err);
                this.emit('end');
            })
            .pipe(vinylSource('combined.js'))
            .pipe(gulp.dest('./build'));

        //Angular
        //d3
        //Module
        // stream -поток
});


//Отслеживание изменений
gulp.task('dev', function () {
    livereload.listen();


//пути относительно gulp.js
    //Jade
    gulp.watch([
        './views/*.jade',
        './views/**/*.jade',
        './views/**/**/*.jade'
    ], function (e) {}).on('change', livereload.changed);

    //Js
    gulp.watch([
        './assets/js/*.js',
        './assets/js/**/*.js',
        './assets/js/**/**/*.js'
    ], ['js']).on('change', livereload.changed);

});