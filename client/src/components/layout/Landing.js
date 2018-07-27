import React, { Component } from 'react';
import AboutMe from './About-me';

class LandingPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <section className="hero is-primary is-fullheight">
          <div className="hero-body">
            <div className="container has-text-centered">
              <h1 className="title">Nazim Turdiyev</h1>
              <h2 className="subtitle">Educational Technologist</h2>
            </div>
          </div>
        </section>
        <AboutMe />
      </div>
    );
  }
}

export default LandingPage;
