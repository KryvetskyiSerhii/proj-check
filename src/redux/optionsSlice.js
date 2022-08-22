import { createSlice } from '@reduxjs/toolkit'

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    activeItem: '',
  },
  reducers: {
    setActiveItem(state, action) {
      state.activeItem = action.payload
    },
  },
})

export default optionsSlice.reducer
export const { setActiveItem } = optionsSlice.actions
