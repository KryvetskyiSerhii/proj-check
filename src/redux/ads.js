import { createSlice } from '@reduxjs/toolkit'
import { ADS_MENU } from 'constants/arraysConstants'
import { COUNTRIES } from 'constants/arraysConstants'

const mainState = {
  menu: ADS_MENU,
  adItems: [
    {
      title: 'Front-end Developer',
      text: 'Needed an experienced front-end developer for.......',
      area: 'Germany',
      phone: '+49170 000 00 00',
      email: 'somemail@gmail.com',
      id: '1',
      link: '/ads/1',
      isVisible: false,
    },
    {
      title: 'Back-end Developer',
      text: 'Needed an experienced back-end developer for.......',
      area: 'Germany',
      phone: '+49170 000 00 45',
      email: 'somemail@gmail.com',
      id: '2',
      link: '/ads/2',
      isVisible: false,
    },
    {
      title: 'Customer service consultant',
      text: 'Needed a customer service consultant.......',
      area: 'Germany',
      phone: '+49170 000 30 00',
      email: 'somemail@gmail.com',
      id: '3',
      link: '/ads/3',
      isVisible: false,
    },
  ],
  countries: COUNTRIES,
  isPhone: false,
  isEmail: false,
  isVisibleSearchBar: false,
}

const ads = createSlice({
  name: 'advertisement',
  initialState: {
    ...mainState,
    menu: [...mainState.menu],
    adItems: [...mainState.adItems],
    countries: [...mainState.countries],
  },
  reducers: {
    findTheJob(state, action) {
      const newFilteredState = { ...state, adItems: [...state.adItems] }
      newFilteredState.adItems = newFilteredState.adItems.filter(
        e =>
          e.title.toLowerCase().includes(action.payload) ||
          e.text.toLowerCase().includes(action.payload)
      )
      if (action.payload.trim() === '') return mainState

      return newFilteredState
    },
    switchPhone(state) {
      state.isPhone = true
      state.isEmail = false
    },
    switchEmail(state) {
      state.isEmail = true
      state.isPhone = false
    },
    switchBoth(state) {
      state.isEmail = true
      state.isPhone = true
    },
    addJob(state, action) {
      const newJob = {
        title: action.payload.title,
        text: action.payload.text,
        area: action.payload.countries,
        phone: action.payload.phone,
        email: action.payload.email,
        id: Date(),
        link: '4',
        isVisible: false,
      }
      mainState.adItems.push(newJob)
      state.adItems.push(newJob)
      return state
    },
    makeSearchBarVisible(state) {
      state.isVisibleSearchBar = true
      mainState.isVisibleSearchBar = true
    },
    showContacts(state, action) {
      state.adItems.filter(e => e.id === action.payload)[0].isVisible = true
    },
  },
})

export default ads.reducer
export const {
  findTheJob,
  switchEmail,
  switchPhone,
  addJob,
  makeSearchBarVisible,
  showContacts,
  switchBoth,
} = ads.actions
