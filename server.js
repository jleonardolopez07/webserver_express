const express = require('express')
const app = express();
const hbs = require('hbs');

require('./hbs/helpers')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');




app.get('/', function(req, res) {
    // res.send('Hello World')

    res.render('home', {
        nombre: 'Leonardo'

    });
});

app.get('/about', function(req, res) {

    res.render('about', {
        nombre: 'Leonardo',
        ano: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port}`);
})