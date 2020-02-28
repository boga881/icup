import tapOrClick from 'react-tap-or-click';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ValveSwitch from './valve-switch';
import Logo from './logo';

const DevTools = process.env.NODE_ENV !== 'production' ? require('../utils/devtools') : null;

connect(state => state)
export default class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        /* eslint no-undef:0 */
        $('.button-collapse').sideNav();
    }

    handleShowSideNav() {
        $('.button-collapse').sideNav('show');
    }

    handleNav(path,e) {
        e.preventDefault();
        this.props.dispatch(BrowserRouter(path));
        $('.button-collapse').sideNav('hide');
    }

    render() {
      return (
        <div>
          {DevTools &&
            <DevTools />
          }
            <header>
              <Router>
                <nav className='top-nav'>
                  <div className='nav-wrapper'>
                    <ul className='right hide-on-med-and-down'>
                      <li>
                        <Link to="/">Schedule</Link>
                      </li>
                      
                      <li >
                        <Link to="/history">History</Link>
                      </li>

                      <li >
                        <Link to="/settings">Settings</Link>
                      </li>
                    </ul>
                    <ValveSwitch />
                  </div>
                    <ul className='side-nav' id='mobile-nav'>
                      <li >
                        <Link to="/">Schedule</Link>
                      </li>

                      <li >
                        <Link to="/history">History</Link>
                      </li>

                      <li>
                        <Link to="/settings">Settings</Link>
                      </li>

                      <li>
                        <Link to="/logout">Logout</Link>
                      </li>
                    </ul>

                    <Switch>
                        <Route path="/:id" children={<Child />} />
                    </Switch>

                </nav>
              </Router>
            </header>


        </div>);
    }
}

function Child() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}
