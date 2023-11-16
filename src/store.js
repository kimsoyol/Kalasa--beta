import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../src/slices/eventsSlice.js'
import collectionReducer from '../src/slices/collectionsSlice.js'

export const store = configureStore({
  reducer: {
    event: eventReducer,
    collection: collectionReducer,
  }
});

export default store;