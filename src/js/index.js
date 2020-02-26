import _ from 'lodash';
import '../css/style.scss';
import printMe from './print.js';
import Icon from '../img/icon.png';
import Data from '../data/data.xml'
import DataJSON from '../data/data.json';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  btn.innerHTML = 'Click!';
  btn.onclick = printMe;
  element.appendChild(btn);

  /*const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);*/

  console.log(DataJSON);

  return element;
}

document.body.appendChild(component());

import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createHistory } from 'history';
import { syncReduxAndRouter } from 'redux-simple-router';

//import createStoreWithMiddleware from '../../lib/store';
//import routes from '../../lib/routes';

const store = createStoreWithMiddleware();
const history = createHistory();
syncReduxAndRouter(history,store);

ReactDOM.render(<Provider store={store}>
    <Router history={history}>
        { routes }
    </Router>
</Provider>,document.getElementById('app-container'));
