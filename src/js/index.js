import React from 'react';
import ReactDOM from 'react-dom';
//import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
//import { syncHistoryWithStore } from 'react-router-redux';
//import { BrowserRouter as Router, Route } from 'react-router-dom';

import createStoreWithMiddleware from './utils/store';
import routes from './utils/routes';

const store = createStoreWithMiddleware();
const history = createBrowserHistory();
//const BrowserRouter = require("react-router-dom").BrowserRouter(history,store);
//syncHistoryWithStore(history,store);
//BrowserRouter(history,store);

ReactDOM.render(
  <Provider store={store}>
    <h1>...</h1>
    <Router history={history}>
      { routes }
    </Router>
  </Provider>
,document.getElementById('app-container'));


// import _ from 'lodash';
// import '../css/style.scss';
// import printMe from './print.js';
// import Icon from '../img/icon.png';
// import Data from '../data/data.xml'
// import DataJSON from '../data/data.json';
//
// function component() {
//   const element = document.getElementById('app');
//   const btn = document.createElement('button');
//
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.classList.add('hello');
//
//   btn.innerHTML = 'Click!';
//   btn.onclick = printMe;
//   element.appendChild(btn);
//
//   console.log(DataJSON);
//
//   return element;
// }
//
// document.body.appendChild(component());
