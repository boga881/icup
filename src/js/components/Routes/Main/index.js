import React from 'react';
//import $ from 'jquery';
//import { sidenav } from '../../../../../node_modules/materialize-css/js/sidenav.js';
//import tapOrClick from 'react-tap-or-click';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import ValveSwitch from 'Components/ValveSwitch';
import Logo from 'Components/Logo';
import { createBrowserHistory } from 'history'

function Main(props) {

  let DevTools = process.env.NODE_ENV !== 'production'
    ? DevTools = require('Utils/devtools')
    : null;

  //componentDidMount(){
    /* eslint no-undef:0 */
    // TODO wrap with doc ready (element doesnt exist)
    //$('.button-collapse').sideNav();
  //}

  const handleShowSideNav = () => (
    {/* TODO wrap with doc ready (element doesnt exist)
    $('.button-collapse').sideNav('show'); */}
  );

  const history = createBrowserHistory();

  const handleNav = (path, e) => (
    e.preventDefault(),
    history.push(path)
  );

  return (<div>
    {/*<DevTools />*/}
    <header>
      <nav className='top-nav'>
        <div className='nav-wrapper'>
          <a className='brand-logo hide-on-med-and-down'>
             <Logo style={{width:"2rem",height:"2rem",marginLeft:"8px",marginRight:"8px"}} />
          </a>

          <a href='/' data-activates='mobile-nav' className='sidenav-open button-collapse'><i style={{marginLeft:'52px'}} className='material-icons'>menu</i></a>

          {/* HIDE DESKTOP MENU & USE SIDENAV
          * <ul className='right hide-on-med-and-down'>
              <li className={this.props.routing.path==='/'?'active':''}><a {...tapOrClick(this.handleNav.bind(this,'/'))}><i className='material-icons'>schedule</i></a></li>
              <li className={this.props.routing.path==='/history'?'active':''}><a {...tapOrClick(this.handleNav.bind(this,'/history'))}><i className='material-icons'>history</i></a></li>
              <li className={this.props.routing.path==='/settings'?'active':''}><a {...tapOrClick(this.handleNav.bind(this,'/settings'))}><i className='material-icons'>settings</i></a></li>
          </ul> */}

          <ValveSwitch />

        </div>

      </nav>
    </header>
    <main>
      <div className='container'>
      { props.children }
      </div>
    </main>
    <footer className='center'>
    </footer>
</div>);

}

export default connect()(Main);
