import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import Main from 'Components/Routes/Main';
import Schedule from 'Components/Routes/Schedule';
import Settings from 'Components/Routes/Settings';
import History from 'Components/Routes/History';
import Login from 'Components/Routes/Login';
import NotFound from 'Components/Routes/NotFound';
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import image1 from "../../../img/icon.png";
import image2 from "../../../img/icon.png";

class Routes extends Component {

  constructor(props) {
    super(props);
    this.state = {
      instance: false,
    }
  }

  componentDidMount() {
    // const options = {
    //   inDuration: 250,
    //   outDuration: 200,
    //   draggable: true
    // };
    M.Sidenav.init(this.Sidenav);
    this.setState({
      instance: M.Sidenav.getInstance(this.Sidenav)
    });
    //let instance = M.Sidenav.getInstance(this.Sidenav);
    this.state.instance.open();
    //console.log(instance.isOpen);
  }

//TODO rewrite sidenav 
//https://codesandbox.io/s/9z08p6wjpo
  closeNav = () => {
    this.state.instance.close();
  }

  /*
    <ul className='side-nav' id='mobile-nav'>
        <li className={this.props.routing.path==='/'?'active':''}><a {...tapOrClick(this.handleNav.bind(this,'/'))}><i className='material-icons left'>schedule</i> Schedule</a></li>
        <li className={this.props.routing.path==='/history'?'active':''}><a {...tapOrClick(this.handleNav.bind(this,'/history'))}><i className='material-icons left'>history</i> History</a></li>
        <li className={this.props.routing.path==='/settings'?'active':''}><a {...tapOrClick(this.handleNav.bind(this,'/settings'))}><i className='material-icons left'>settings</i> Settings</a></li>
        <li><a href='/logout'><i className='material-icons left'>exit_to_app</i> Logout</a></li>
    </ul>
   */

  render() {
    return (
      <Router>
        <div>
          <ul ref={Sidenav => {this.Sidenav = Sidenav;}} id='slide-out' className='sidenav'>
            <li>
              <div className="user-view">
                <div className="background">
                  <img src={image2} />
                </div>
                <a href="#user">
                  <img className="circle" src={image1} />
                </a>
                <a href="#name">
                  <span className="white-text name">John Doe</span>
                </a>
                <a href="#email">
                  <span className="white-text email">jdandturk@gmail.com</span>
                </a>
              </div>
            </li>
            <li>
              <a href="#!">
                <i className="material-icons">cloud</i>First Link With Icon
              </a>
            </li>
            <li>
              {/*<i className='material-icons left'>*/}
              <Link to="/" onClick={() => this.closeNav()}>Schedule</Link>
              {/*</i>*/}
            </li>
            <li>
              {/*<i className='material-icons left'>*/}
                <Link to="/history">History</Link>
              {/*</i>*/}
            </li>
            <li>
              {/*<i className='material-icons left'>*/}
                <Link to="/settings">Settings</Link>
              {/*</i>*/}
            </li>
            <li>
              {/*<i className='material-icons left'>*/}
                <Link to="/logout">Logout</Link>
              {/*</i>*/}
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a className="subheader">Subheader</a>
            </li>
            <li>
              <a className="waves-effect" href="#!">
                Third Link With Waves
              </a>
            </li>
          </ul>
          <a href="#!" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
        </div>




          <Switch>
            <Route exact path='/' component={Main} />
            <Route path='/login' component={Login} />
            <Route path='/schedule' component={Schedule} />
            <Route path='/settings' component={Settings} />
            <Route path='/history' component={History} />
            <Route component={NotFound} />
          </Switch>



      </Router>
    );
  }
}

export default Routes;
