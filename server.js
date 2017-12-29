var express           = require('express');
var app               = express();
var router            = express.Router();
var path              = require('path');

//установка чтения jade файлов
app.set('view engine', 'jade');

// скрыть заголовки
app.disable('x-powered-by');

app.use('/build', express.static(path.join(__dirname, 'build'),{
    maxAge: 5000 * 1000
}));
app.use('/vendor', express.static(path.join(__dirname, 'vendor')));


//прослойка middlewear
app.get('/kit', function (req, res) {
    res.render('main', {
        pageTitle: 'Main Page'
    });
});


app.use('', router);

app.listen(8880);


