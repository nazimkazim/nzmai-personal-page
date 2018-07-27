import React, { Component } from 'react';
import AboutMe from './About-me';

class LandingPage extends Component {
  render() {
    return (
      <div class="container-fluid">
        <section class="hero is-primary is-fullheight">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="title">Nazim Turdiyev</h1>
              <h2 class="subtitle">Educational Technologist</h2>
            </div>
          </div>
        </section>
        <AboutMe />
      </div>
    );
  }
}

export default LandingPage;
