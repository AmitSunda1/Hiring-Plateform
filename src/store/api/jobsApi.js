import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', // Adjust this to your backend URL
  }),
  tagTypes: ['Job'],
  endpoints: (builder) => ({
    getJobStats: builder.query({
      query: () => '/jobs/stats',
      providesTags: ['Job'],
    }),
    getJobsByDepartment: builder.query({
      query: (department) => `/jobs/stats?department=${department}`,
      providesTags: ['Job'],
    }),
    getJobSummary: builder.query({
      query: () => '/jobs/summary',
      providesTags: ['Job'],
    }),
  }),
});

export const { 
  useGetJobStatsQuery, 
  useGetJobsByDepartmentQuery, 
  useGetJobSummaryQuery 
} = jobsApi;
