import {  fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { exitFromApp } from './userSlice'


export const baseQueryWithReauth = async (args, api, extraOptions) => {
    const baseQuery = fetchBaseQuery({
      baseUrl: 'http://localhost:8090/',
      prepareHeaders: (headers) => {
        const token = localStorage.getItem('access')
        if (token) {
          headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
      },
    })
  
    const result = await baseQuery(args, api, extraOptions)
  
    if (result?.error?.status !== 401) {
      return result
    }
    const logout = () => {
      api.dispatch(exitFromApp())
      window.location.navigate('/login')
    }
    const refresh = localStorage.getItem('refresh')
    if (!refresh) {
      return logout()
    }
  
    const refreshResult = await baseQuery(
      {
        url: 'auth/login',
        method: 'PUT',
        body: {
          access_token: localStorage.getItem('access'),
          refresh_token: localStorage.getItem('refresh'),
        },
      },
      api,
      extraOptions,
    )
  
    if (!refreshResult.data.access_token) {
      return logout()
    }
  
    
    localStorage.setItem("access", refreshResult.data.access_token)
    localStorage.setItem("refresh", refreshResult.data.refresh_token)
  
    const retryResult = await baseQuery(args, api, extraOptions)
  
    if (retryResult?.error?.status === 401) {
      return logout()
    }
  
    return retryResult
  }
  