import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from './baseQueryWithAuth'

export const adsApi = createApi({
  reducerPath: 'adsApi',
  tagTypes: ['Comment', 'Adv', 'Update','Delete'],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getAds: build.query({
      query: () => 'ads',
      providesTags: ['Comment', 'Adv','Delete'],
    }),
    getAdvComments: build.query({
      query: (id) => `ads/${id}/comments`,
      providesTags: ['Comment'],
    }),
    getAdv: build.query({
      query: (id) => `ads/${id}`,
      providesTags: ['Comment', 'Update', 'Adv'],
    }),
    addComment: build.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}/comments`,

        headers: {          
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Comment'],
    }),
    addAdv: build.mutation({
      query: ({ body }) => ({
        url: `adstext`,
        headers: {          
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adv'],
    }),
    deleteAdv: build.mutation({
      query: ( id ) => ({
        url: `ads/${id}`,        
        method: 'DELETE',
      }),
      invalidatesTags: ['Delete'],
    }),
    updateAdv: build.mutation({
      query: ({ id, body}) => ({
        url: `ads/${id}`,
        headers: {          
          'Content-Type': 'application/json',
        },
        method: 'PATCH',
        body,
      }),
      invalidatesTags: ['Adv', 'Update'],
    }),
    addImg: build.mutation({
      query: ({ id, body }) => ({
        url: `ads/${id}/image`,
        headers: { formData: true },
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Adv'],
    }),

    deleteImg: build.mutation({
      query: ({ id, file_url}) => ({
        url: `ads/${id}/image`,
        params: file_url,        
        method: 'DELETE',
      }),
      invalidatesTags: ['Adv'],
    }),
  }),
})

export const {
  useGetAdsQuery,
  useGetAdvCommentsQuery,
  useGetAdvQuery,
  useAddCommentMutation,
  useAddAdvMutation,
  useDeleteAdvMutation,
  useUpdateAdvMutation,
  useAddImgMutation,
  useDeleteImgMutation,
} = adsApi
