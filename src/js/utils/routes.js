import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams
} from 'react-router-dom';

import Main from '../components/main';
import Schedule from '../components/schedule';
import Settings from '../components/settings';
import History from '../components/history';
import Login from '../components/login';
import NotFound from '../components/not-found';

export default (<Router>
  <Switch>
    <Route path='/login' component={Login} />
    <Route exact path='/' component={Main}>
        <Route path='/settings' component={Settings} />
        <Route path='/history' component={History} />
        <Route path='*' component={NotFound} />
    </Route>
  </Switch>
</Router>);
