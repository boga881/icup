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
        <h3>Dan is cool</h3>
        <Router>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/settings' component={Settings} />
            <Route path='/history' component={History} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    )
  }
}
