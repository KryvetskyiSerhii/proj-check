import { combineReducers, configureStore } from '@reduxjs/toolkit'
import articles from './articles'
import menu from './menu'
import ads from './ads'
import general from './general'
import result from './result'
import slider from './slider'
import map from './map'
import search from './search'
import videoSlice from './videoSlice'
import optionsSlice from './optionsSlice'
import imagesSlice from './imagesSlice'
import newsSlice from './newsSlice'
import shoppingSlice from './shoppingSlice'

const rootReducer = combineReducers({
  modal: menu,
  articles,
  ads,
  general,
  result,
  slider,
  map,
  search,
  videoSlice,
  optionsSlice,
  imagesSlice,
  newsSlice,
  shoppingSlice,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 348 },
      serializableCheck: { warnAfter: 348 },
    }),
})
