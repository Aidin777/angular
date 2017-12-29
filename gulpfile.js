/**
 * Created by Elvin on 26.12.2017.
 */
var gulp              = require("gulp"),
    sass              = require("gulp-sass"),
    livereload        = require("gulp-livereload"),
    autoprefixer      = require("gulp-autoprefixer"),
    concat            = require("gulp-concat"),
    plumber           = require("gulp-plumber"),
    browserify        = require("browserify"),
    vinylSource       = require("vinyl-source-stream"),
    es                = require("event-stream")
    ;



//Задачи
gulp.task('css', function () {

    var vendor = gulp.src('./vendor/normalize-css/normalize.css');

    var bundle = gulp.src('./assets/css/app.scss')
        .pipe(plumber({
            errorHandler: function (err) {
                console.log(err);
                this.emit('end');
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: true
        }));

    //Склейка через return

    return es.merge(vendor, bundle)
        .pipe(concat('combined.css'))
        .pipe(gulp.dest('./build'))
        .pipe(livereload());

});
//bundle - склейка файлов
//Название comdined.js
//место для хранения build

gulp.task('js', function () {

        return browserify('./assets/js/bootstrap.js')
            .bundle().on('error', function (err) {
                console.log(err.toString());
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

    //SCSS
    gulp.watch([
        './assets/css/*.scss',
        './assets/css/**/*.scss'
    ], ['css']);

});