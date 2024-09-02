import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './profileSlice';
// So what is STORE? Basically a Single Source of Truth for all DATA in this REACT APP!! - stores application's global state
// configureStore - to create a store, and reducer to manage the state.
const store = configureStore({
  reducer: {
    profile: profileReducer
  }
});

export default store;