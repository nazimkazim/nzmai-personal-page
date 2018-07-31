import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.registerUser(newUser);
    // axios
    //   .post('/api/users/register', newUser)
    //   .then(res => console.log(res.data))
    //   .catch(err => this.setState({ errors: err.response.data }));
  }
  render() {
    const { errors } = this.state;

    const { user } = this.props.auth;
    {
    }
    return (
      <div className="container" style={{ paddingTop: 100 }}>
        {user ? user.name : null}
        <div className="column is-half is-offset-one-fifth">
          <form onSubmit={this.onSubmit}>
            <div className="field">
              <input
                className={classnames('input', {
                  'is-danger': errors.name
                })}
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onChange}
                placeholder="Name"
              />
              {errors.name && <p className="help is-danger">{errors.name}</p>}
            </div>
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
              {errors.email && <p className="help is-danger">{errors.email}</p>}
              <small>
                This site uses Gravatar, so if you want a profile image, use a
                gravatar email
              </small>
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
              <p className="control has-icons-left">
                <input
                  className={classnames('input', {
                    'is-danger': errors.password2
                  })}
                  type="password"
                  placeholder="Confirm password"
                  name="password2"
                  onChange={this.onChange}
                  value={this.state.password2}
                />

                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
              {errors.password2 && (
                <p className="help is-danger">{errors.password2}</p>
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
    );
  }
}

Register.PropTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
