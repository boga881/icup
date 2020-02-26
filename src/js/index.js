import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
//import { syncReduxAndRouter } from 'redux-simple-router';

//import createStoreWithMiddleware from './store';
//import routes from './routes';

//const store = createStoreWithMiddleware();
//const history = createBrowserHistory();
//syncReduxAndRouter(history,store);

ReactDOM.render(
    <h1>Hello React</h1>
    // <Provider store={store}>
    //   <Router history={history}>
    //       { routes }
    //       </Router>
    // </Provider>
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
