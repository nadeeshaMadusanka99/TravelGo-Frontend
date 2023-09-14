import { apiSlice } from './apiSlice';
import { LOGIN_API_URL, LOGOUT_API_URL, REGISTER_API_URL } from '../config';

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: LOGIN_API_URL,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: LOGOUT_API_URL,
        method: 'POST',
      })
    }),
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