import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar is-transparent is-primary">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://bulma.io/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
              width="112"
              height="28"
            />
          </Link>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item">Projects</a>
            <a className="navbar-item" href="#about-me">
              About Me
            </a>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="field is-grouped">
              <p class="control">
                <a
                  class="bd-tw-button button is-primary"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                >
                  <span class="icon">
                    <i class="fab fa-twitter" />
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p class="control">
                <a
                  class="bd-tw-button button is-primary"
                  data-social-network="Facebook"
                  data-social-action="facebook"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                >
                  <span class="icon">
                    <i class="fab fa-facebook" />
                  </span>
                  <span>Facebook</span>
                </a>
              </p>
              <p class="control">
                <Link class="bd-tw-button button is-primary" to="/login">
                  <span class="icon">
                    <i class="fas fa-sign-in-alt" />
                  </span>
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;
