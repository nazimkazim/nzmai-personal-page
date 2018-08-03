import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import classnames from 'classnames';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };

    this.props.loginUser(userData);
  }

  render() {
    const { errors } = this.state;

    return (
      <div>
        <div className="container" style={{ paddingTop: 100 }}>
          <div className="column is-half is-offset-one-fifth">
            <form onSubmit={this.onSubmit}>
              <div className="field">
                <p className="control has-icons-left has-icons-right">
                  <input
                    className={classnames('input', {
                      'is-danger': errors.email
                    })}
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="Email"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope" />
                  </span>
                  <span className="icon is-small is-right">
                    <i className="fas fa-check" />
                  </span>
                </p>
                <small>
                  This site uses Gravatar, so if you want a profile image, use a
                  gravatar email
                </small>
                {errors.email && (
                  <p className="help is-danger">{errors.email}</p>
                )}
              </div>
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className={classnames('input', {
                      'is-danger': errors.password
                    })}
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder="Password"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <div className="field">
                <input
                  type="submit"
                  value="Submit"
                  className="button is-medium is-primary is-fullwidth"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
