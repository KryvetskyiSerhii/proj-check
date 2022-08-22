import { createSlice } from '@reduxjs/toolkit'
import { NAV_MODULE_MENU } from 'constants/arraysConstants'

const menu = createSlice({
  name: 'menu',
  initialState: {
    isModalVisible: false,
    isSearchBarVisible: false,
    menuItems: NAV_MODULE_MENU,
    isColor: '',
  },
  reducers: {
    toggleClass(state) {
      state.isModalVisible = !state.isModalVisible
    },
    closeModal(state) {
      state.isModalVisible = false
    },
    searchBarIsVisible(state) {
      state.isSearchBarVisible = true
    },
    switchImageColor(state, action) {
      state.isColor = action.payload
    },
    switchImageMono(state) {
      state.isColor = ''
    },
  },
})

export default menu.reducer
export const { toggleClass, searchBarIsVisible, closeModal, switchImageColor, switchImageMono } =
  menu.actions
