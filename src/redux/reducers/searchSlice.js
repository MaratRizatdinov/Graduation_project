import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    filterString: '',
    currentSeller: '',
  },
  reducers: {
    addSubstring(state, action) {
      state.filterString = action.payload.value
    },
    removeSubstring(state) {
      state.filterString = ''
    },
  },
})

export const { addSubstring, removeSubstring } = searchSlice.actions

export default searchSlice.reducer
