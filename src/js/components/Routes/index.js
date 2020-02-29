import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Main from 'Components/Routes/Main';
import Schedule from 'Components/Routes/Schedule';
import Settings from 'Components/Routes/Settings';
import History from 'Components/Routes/History';
import Login from 'Components/Routes/Login';
import NotFound from 'Components/Routes/NotFound';

export default class Routes extends React.Component {

  constructor (props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h1>Mi Aplicacion React Js</h1>
        <h3>Dan is cool</h3>
        <Router>
          <Route exact path='/' component={Main} />
          <Route path='/login' component={Login} />
          <Route path='/schedule' component={Schedule} />
          <Route path='/settings' component={Settings} />
          <Route path='/history' component={History} />
          <Route path='*' component={NotFound} />
        </Router>
      </div>
    )
  }
}

{/*
import { Router,Route, IndexRoute } from 'react-router';
import React from 'react';
import Main from './components/main';
import Schedule from './components/schedule';
import Settings from './components/settings';
import History from './components/history';
import Login from './components/login';
import NotFound from './components/not-found';

export default (<Router>
    <Route path='/login' component={Login} />
    <Route path='/' component={Main}>
        <IndexRoute component={Schedule} />
        <Route path='/settings' component={Settings} />
        <Route path='/history' component={History} />
        <Route path='*' component={NotFound} />
    </Route>
</Router>);

  */}
