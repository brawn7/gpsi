const express = require('express');
const morgan = require('morgan');
const router = require('./router.js');

const app = express();

app.set('port', process.env.PORT || 3010);
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(router);

module.exports = app;