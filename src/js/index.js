import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import * as createHistory  from 'history'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
//import '../../node_modules/materialize-css/dist/css/materialize.min.css';
//import '../../node_modules/materialize-css/dist/js/materialize.js';


//import 'materialize-css';
//import { select } from 'materialize-css/js/select';

{ /* import { Router } from 'react-router';


import { createBrowserHistory } from 'history';
import { Routes } from './components/Routes';*/}

import Routes from './Components/Routes';
import reducer from './reducers'

{ /* import { syncHistoryWithStore } from 'react-router-redux'; */}
{ /* import { BrowserRouter as Router, Route } from 'react-router-dom'; */}

{ /* import createStoreWithMiddleware from './utils/store';
import routes from './utils/routes'; */ }

const store = createStore(reducer);
{ /*const store = createStoreWithMiddleware();
const store = createStore(todoApp, {}) */}
const history = createHistory.createBrowserHistory();

{ /* const history = createBrowserHistory(); */ }
{ /* const BrowserRouter = require("react-router-dom").BrowserRouter(history,store); */}
{ /* syncHistoryWithStore(history,store); */}
{ /* BrowserRouter(history,store); */}
{ /**/ }
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Routes />
    </Router>
  </Provider>
,document.getElementById('app-container'));


{/* <Router history={history}>
   { routes }
 </Router>
</Provider> */}

{ /* import _ from 'lodash';
 import '../css/style.scss';
import printMe from './print.js';
import Icon from '../img/icon.png';
import Data from '../data/data.xml'
import DataJSON from '../data/data.json';

function component() {
  const element = document.getElementById('app');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click!';
  btn.onclick = printMe;
  element.appendChild(btn);

  console.log(DataJSON);

  return element;
}

document.body.appendChild(component()); */ }
