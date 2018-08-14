import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  onDeleteClick(e) {
    this.props.deleteAccount();
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
        dashboardContent = (
          <div>
            <h2
              className="has-text-grey-dark has-text-centered"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              Welcome{' '}
              <Link to={`/profile/${profile.handle}`}>
                {user.name[0].toUpperCase() + user.name.slice(1)}
              </Link>
            </h2>
            <ProfileActions />
            {/* TODO: exp and edu*/}
            <div style={{ marginBottom: '60px' }}>
              <button
                onClick={this.onDeleteClick.bind(this)}
                className="button is-danger"
              >
                Delete My Account
              </button>
            </div>
          </div>
        );
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
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, deleteAccount }
)(Dashboard);
