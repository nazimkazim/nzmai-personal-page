import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../src/store';

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
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={LandingPage} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/experience" component={AboutMe} /> */}
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
