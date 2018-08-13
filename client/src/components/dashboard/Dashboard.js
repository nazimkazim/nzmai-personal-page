import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profileActions';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }
  render() {
    const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <h4>Display profile</h4>;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <section
            className="hero is-primary is-medium"
            style={{ marginTop: 100 }}
          >
            <div className="hero-body">
              <h1 className="title">Wellcome {user.name}</h1>
              <h2 className="subtitle">
                <p>You have not yet set up a profile please add some info</p>
              </h2>
              <Link
                to="/create-profile"
                className="is-link button is-inverted is-outlined"
              >
                Create profile
              </Link>
            </div>
          </section>
        );
      }
    }
    return <div>{dashboardContent}</div>;
  }
}

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
