const express = require('express');
const app = express();

app.use(express.json());

//need the router we creatd in profiles
app.use('/api/v1/profiles', require('./controllers/profiles'));


app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
