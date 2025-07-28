import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const candidatesApi = createApi({
  reducerPath: 'candidatesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/api', // Adjust this to your backend URL
  }),
  tagTypes: ['Candidate'],
  endpoints: (builder) => ({
    getAllCandidates: builder.query({
      query: () => '/candidates',
      providesTags: ['Candidate'],
    }),
    getCandidateById: builder.query({
      query: (id) => `/candidates/${id}`,
      providesTags: (result, error, id) => [{ type: 'Candidate', id }],
    }),
    getCandidatesByStatus: builder.query({
      query: (status) => `/candidates?status=${status}`,
      providesTags: ['Candidate'],
    }),
  }),
});

export const { 
  useGetAllCandidatesQuery,
  useGetCandidateByIdQuery,
  useGetCandidatesByStatusQuery
} = candidatesApi;
