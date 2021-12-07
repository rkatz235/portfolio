import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBars } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Home from './components/Home';
import Contact from './components/Contact';
import Work from './components/Work';
import Resume from './components/Resume';
import Profile from './components/Profile';
import WorkTemplate from './components/WorkTemplate';

export default class App extends React.Component {
  constructor(){
    super();
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(){
    $("#site-nav").toggleClass("hidden");
  }

  render(){
    return (
      <Router>
        <div>
          
          <nav>
              <div id="site-title">
                <Link to ="/portfolio"><h1>Rachel<span></span></h1><h1>Katz<span></span></h1></Link>
              </div>
              <div className="ham-menu">
                <FontAwesomeIcon id="ham-icon" icon={faBars} onClick={this.toggleMenu}/>
              </div>
              <ul id="site-nav" className="hidden">
                <li>
                  <NavLink to="/profile" activeClassName="cur-page">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/resume" activeClassName="cur-page">Resume</NavLink>
                </li>
                <li>
                  <NavLink to="/work" activeClassName="cur-page">Work</NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="cur-page">Contact</NavLink>
                </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/contact" component={Contact}></Route>
            <Route exact path="/work/:id" component={ WorkTemplate } />

            <Route exact path="/work" component={Work}></Route>

            <Route exact path="/resume" component={Resume}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/portfolio" component={Home}></Route>
            <Route exact path="/" component={Home}></Route>
          </Switch>



          <div id="external-links">
              <ul>
                <li><a href="mailto:rkatz235@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a></li>
                <li><a href="https://www.linkedin.com/in/rachelxuanrongkatz/"><FontAwesomeIcon icon={faLinkedin} /></a></li>

              </ul>
          </div>
          <div id="footer">
              <ul>
                <li>&copy; Rachel Katz 2020</li>
              </ul>

          </div>
        </div>
      </Router>
  );
  }
}

