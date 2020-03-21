const express = require('express');
const path = require('path');

const errorController = require('./controllers/error');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
    res.render('main',{pageTitle: 'DAF-C Gestione Finanze'});
});

app.use(errorController.get404);

app.listen(3000);