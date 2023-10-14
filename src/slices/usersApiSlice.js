import { apiSlice } from './apiSlice';
import { LOGIN_API_URL, LOGOUT_API_URL, REGISTER_API_URL } from '../config';

export const userApiSlice = apiSlice.injectEndpoints({
  // Define a map of hooks which can be used to send requests to the endpoints
  endpoints: (builder) => ({
    // Login endpoint
    login: builder.mutation({
      query: (data) => ({
        url: LOGIN_API_URL,
        method: 'POST',
        body: data,
      }),
    }),

    // Logout endpoint
    logout: builder.mutation({
      query: () => ({
        url: LOGOUT_API_URL,
        method: 'POST',
      })
    }),

    // Register endpoint
    register: builder.mutation({
      query:(data) => ({
        url: REGISTER_API_URL,
        method: 'POST',
        body: data,
      })
    })
  }),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = userApiSlice;