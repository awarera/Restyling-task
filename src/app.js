import { createBrowserRouter } from 'found/lib';
import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';

require('./theme.sass');

const BrowserRouter = createBrowserRouter({ routeConfig: routes });
ReactDOM.render(<BrowserRouter />, document.getElementById('root'));
