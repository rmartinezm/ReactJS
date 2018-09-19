const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

// Routes imports
const index = require('./routes/index');
const users = require('./routes/users');

// Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Midelwares
app.use((req, res, next) => {
    console.log(`${req.url} - ${req.method}`);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/', index);
app.use('/api/v1/users', users);
app.use((req, res, next) => res.status(404).send().end());

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Init the server
app.listen(app.get('port'), () => console.log(`Server on port ${app.get('port')}`));