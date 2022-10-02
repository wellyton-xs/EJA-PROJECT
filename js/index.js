// imports
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes');
const bodyParser = require('body-parser');


// instances
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(5050);

console.log('Server running at http://localhost:8080/');