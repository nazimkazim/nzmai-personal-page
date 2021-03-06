import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import { clearCurrentProfile } from '../../actions/profileActions';

class Navbar extends Component {
  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile();
    this.props.logoutUser();
  }
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <p className="control">
        <Link className="bd-tw-button button is-primary" to="/logout">
          <span className="icon">
            <i className="fas fa-sign-out-alt" />
          </span>
          <span>
            <a
              id="logoutBtnLink"
              href="#"
              onClick={this.onLogoutClick.bind(this)}
            >
              Logout
            </a>
          </span>
        </Link>
      </p>
    );

    const guestLinks = (
      <p className="control">
        <Link className="bd-tw-button button is-primary" to="/login">
          <span className="icon">
            <i className="fas fa-sign-in-alt" />
          </span>
          <span>Login</span>
        </Link>
      </p>
    );

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
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              <p className="control">
                <a
                  className="bd-tw-button button is-primary"
                  data-social-network="Twitter"
                  data-social-action="tweet"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms"
                >
                  <span className="icon">
                    <i className="fab fa-twitter" />
                  </span>
                  <span>Tweet</span>
                </a>
              </p>
              <p className="control">
                <a
                  className="bd-tw-button button is-primary"
                  data-social-network="Facebook"
                  data-social-action="facebook"
                  data-social-target="http://localhost:4000"
                  target="_blank"
                  href="https://facebook.com/turdiev1"
                >
                  <span className="icon">
                    <i className="fab fa-facebook" />
                  </span>
                  <span>Facebook</span>
                </a>
              </p>
              {isAuthenticated ? authLinks : guestLinks}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, clearCurrentProfile }
)(Navbar);
