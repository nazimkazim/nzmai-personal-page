import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
  return (
    <nav class="level">
      <div class="level-item has-text-centered">
        <div class="field has-addons">
          <p class="control">
            <Link to="/edit-profile" class="button">
              <span class="icon is-small">
                <i class="fas fa-edit" />
              </span>
              <span>Edit Profile</span>
            </Link>
          </p>
          <p class="control">
            <Link to="/add-experience" class="button">
              <span class="icon is-small">
                <i class="fas fa-plus-circle" />
              </span>
              <span>Add Experience</span>
            </Link>
          </p>
          <p class="control">
            <Link to="/add-education" class="button">
              <span class="icon is-small">
                <i class="fas fa-plus-circle" />
              </span>
              <span>Add Education</span>
            </Link>
          </p>
        </div>
      </div>
    </nav>
  );
};
export default ProfileActions;
