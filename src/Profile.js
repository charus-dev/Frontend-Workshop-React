// Profile.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProfile, clearProfile } from './profileSlice';

const Profile = () => {
  const dispatch = useDispatch();
  // useSelector is used to access the profile data(state) from the Redux store
  // dispatch to clear the profile when the "Clear Profile" button is clicked.
  const profile = useSelector((state) => state.profile);

  const handleClearProfile = () => {
    // dispatch is used to send actions
    dispatch(clearProfile());
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <p><strong>Name:</strong> {profile.name || 'No profile set'}</p>
        <p><strong>Email:</strong> {profile.email || 'No profile set'}</p>
      </div>
      <button onClick={handleClearProfile} className="btn btn-secondary">
        Clear Profile
      </button>
    </div>
  );
};

export default Profile;
