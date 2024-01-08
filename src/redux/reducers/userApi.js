import { createApi} from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithAuth'

export const userApi = createApi({
  reducerPath: 'userApi',
  tagTypes: ['User'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getUser: build.query({
      query: () => ({
        url: 'user',        
      }),
      providesTags: ['User'],
    }),
    getUsers: build.query({
      query:()=>({
        url:'user/all',
      }),
      providesTags: ['User'],
    }),
    updateUser: build.mutation({
      query: ({ body}) => ({
        url: 'user',        
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['User'],
    }),
    updateAvatar: build.mutation({
      query: ({ body }) => ({
        url: 'user/avatar',
        headers: { formData: true },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
})

export const {
  useGetUserQuery,
  useGetUsersQuery,
  useUpdateUserMutation,
  useUpdateAvatarMutation,
} = userApi
