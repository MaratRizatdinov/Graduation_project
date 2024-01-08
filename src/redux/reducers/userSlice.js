import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authorization: false,
    username: '',    
  },
  reducers: {
    logInApp(state) {
      state.authorization = true
    },
    exitFromApp(state) {
      state.authorization = false      
    },
    changeUser(state, action) {
      state.username = action.payload      
    },
  },
})

export const { logInApp, exitFromApp, changeUser } = userSlice.actions

export default userSlice.reducer
