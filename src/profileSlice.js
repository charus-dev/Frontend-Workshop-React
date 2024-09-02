// profileSlice.js
// This file defines a slice of the Redux store specifically for managing user profile data. It includes actions to set or clear 
// the profile and a reducer to handle these actions.
import { createSlice } from '@reduxjs/toolkit';

// It's used to manage the state related to user profiles
const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    email: ''
  },
  // A slice defines its own reducers that handle actions and update the state. These reducers are functions that take the current 
  // state and an action as arguments and return the new state.
  reducers: {
    setProfile(state, action) {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
    clearProfile(state) {
      state.name = '';
      state.email = '';
    }
  }
});

export const { setProfile, clearProfile } = profileSlice.actions;
export default profileSlice.reducer;
