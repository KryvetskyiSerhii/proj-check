import { createSlice } from '@reduxjs/toolkit'

const general = createSlice({
  name: 'general',
  initialState: {
    lightStyle: false,
    darkStyle: true,
    isDeleteButtonVisible: false,
    inputValue: '',
    mapInputValue: '',
    flipMenu: false,
    onVerticalMenuActive: false,
    onVerticalMenuHover: '',
    settingsMenu: false,
    fontsMenu: false,
    fontFace: '',
    language: 'en',
    aboutUsModal: false,
  },
  reducers: {
    switchLightStyle(state) {
      state.lightStyle = true
      state.darkStyle = false
    },
    switchDarkStyle(state) {
      state.darkStyle = true
      state.lightStyle = false
    },
    switchStyles(state) {
      state.darkStyle = !state.darkStyle
    },
    switchDeleteButton(state, action) {
      if (action.payload.trim().length > 0) {
        state.isDeleteButtonVisible = true
      } else state.isDeleteButtonVisible = false
    },
    changeValue(state, action) {
      state.inputValue = action.payload
    },

    deleteValue(state) {
      state.inputValue = ''
    },
    switchMenu(state) {
      state.flipMenu = !state.flipMenu
    },
    switchMenuWidth(state) {
      state.onVerticalMenuActive = !state.onVerticalMenuActive
    },
    hoverVerticalNMenuIcons(state, action) {
      state.onVerticalMenuHover = action.payload
    },
    unHoverVerticalMenuIcon(state) {
      state.onVerticalMenuHover = ''
    },
    switchSettingsMenu(state) {
      state.settingsMenu = !state.settingsMenu
    },
    switchFontsMenu(state) {
      state.fontsMenu = !state.fontsMenu
    },
    setFontFace(state, action) {
      state.fontFace = action.payload
    },
    changeLanguage(state, action) {
      state.language = action.payload
    },
    switchAboutUsModal(state) {
      state.aboutUsModal = !state.aboutUsModal
    },
  },
})

export default general.reducer
export const {
  switchLightStyle,
  switchDarkStyle,
  switchDeleteButton,
  changeValue,
  deleteValue,
  switchMenu,
  switchMenuWidth,
  hoverVerticalNMenuIcons,
  unHoverVerticalMenuIcon,
  switchSettingsMenu,
  switchStyles,
  setFontFace,
  switchFontsMenu,
  changeLanguage,
  switchAboutUsModal,
} = general.actions
