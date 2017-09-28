const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.js');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const compiler = webpack(config);

const APP_PORT = 3047;

app.use(webpackDevMiddleware(compiler));
app.use('/public', express.static('public'));

const server = app.listen(APP_PORT, () => console.log(`app is now running on http://localhost:${APP_PORT}`)); // eslint-disable-line
app.use('/', express.static(path.resolve(__dirname, 'src')));
app.use('*', express.static(path.resolve(__dirname, 'src', 'index.html')));
