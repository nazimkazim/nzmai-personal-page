import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import LandingPage from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import AboutMe from './components/layout/About-me';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <div className="container">
              <Route
                exact
                path="/nzmai/personal-page/secret/register"
                component={Register}
              />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/experience" component={AboutMe} /> */}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
