const express = require('express');
const cors = require('cors');

//Initialization
const app = express();
require('./database');

//Settings:
app.set('port',process.env.PORT || 3500)

//Middleware
app.use(express.json())
app.use(cors());

//Routes
app.use(require('./routes/quotes.routes'))

module.exports = app;