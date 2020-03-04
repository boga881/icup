import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import * as createHistory  from 'history'
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import Routes from 'Components/Routes';
import reducer from './reducers'
import thunk from 'redux-thunk';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

import createStoreWithMiddleware from 'Utils/store';

function App() {

  const history = createHistory.createBrowserHistory();
  const store = createStoreWithMiddleware(
    reducer,
    applyMiddleware(thunk)
  );

  return (
    <div className="container">
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

const rootElement = document.getElementById("app-container");
ReactDOM.render(<App />, rootElement);

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
