import { configureStore } from '@reduxjs/toolkit';
import { jobsApi } from './api/jobsApi';
import { candidatesApi } from './api/candidatesApi';
import { eventsApi } from './api/eventsApi';

export const store = configureStore({
  reducer: {
    [jobsApi.reducerPath]: jobsApi.reducer,
    [candidatesApi.reducerPath]: candidatesApi.reducer,
    [eventsApi.reducerPath]: eventsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(jobsApi.middleware)
      .concat(candidatesApi.middleware)
      .concat(eventsApi.middleware),
});
