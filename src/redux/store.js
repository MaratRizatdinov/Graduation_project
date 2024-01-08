import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './reducers/searchSlice'
import userReducer from './reducers/userSlice'
import { adsApi } from './reducers/adsApi'
import { authApi } from './reducers/authApi'
import { userApi } from './reducers/userApi'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    user: userReducer,
    [adsApi.reducerPath]: adsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(adsApi.middleware)
      .concat(authApi.middleware)
      .concat(userApi.middleware),
})
