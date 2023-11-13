import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../src/slices/eventsSlice.js'


export const store = configureStore({
  reducer: {
    event: eventReducer,
  }
});

export default store;