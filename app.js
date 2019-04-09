const express = require('express');
const router = require('./routes');
const corsMiddleware = require('./middlewares/cors');
const errorsMiddleware = require('./middlewares/errors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// app.use(corsMiddleware);

app.use(router);

app.use(errorsMiddleware);

module.exports = app;
