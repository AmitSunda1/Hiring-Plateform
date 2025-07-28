import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', // Adjust this to your backend URL
  }),
  tagTypes: ['Event'],
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => '/events',
      providesTags: ['Event'],
    }),
  }),
});

export const { 
  useGetAllEventsQuery
} = eventsApi;
