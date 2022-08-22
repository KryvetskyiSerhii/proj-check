import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { apiUrls } from 'api/urls'
import axios from 'axios'
import { getRequest } from 'api/apiClient'

export const fetchMapIp = createAsyncThunk('coordinates/fetchMapIp', async () => {
  const options = {
    method: 'GET',
    url: apiUrls.getSearchResult.mapIpUrl,
    headers: {
      'X-RapidAPI-Key': '05b8fdfb8fmsh9f4829ae5e458b9p1cc375jsn52dd066228f0',
      'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
    },
  }
  const response = await axios(options)
  console.log(response)
  const coordinates = {
    lat: response.data.latitude,
    lng: response.data.longitude,
    country: response.data.country,
    capital: response.data.country_capital,
    flag: response.data.country_flag,
    currency: response.data.currency,
    city: response.data.city,
  }
  return coordinates
})

export const fetchSearxMapData = createAsyncThunk('searxData/fetchSearxMapData', async url => {
  const response = await getRequest(
    `https://cors-anywhere.herokuapp.com/${apiUrls.getSearchResult.searx.searxMap}${url}`
  )
  console.log(response.data.results)
})

export const fetchLocationData = createAsyncThunk('coordinates/fetchSearchData', async url => {
  const response = await getRequest(
    `https://api.geoapify.com/v1/geocode/search?text=${url}&format=json&apiKey=c604c8a9a97a425281dae7721a2c4277`
  )
  console.log(response.data.results)
  const dataToRender = {
    lat: response.data.results[0].lat,
    lng: response.data.results[0].lon,
    country: response.data.results[0].country,
    city: response.data.results[0].city,
    currency: '',
    flag: '',
    capital: '',
  }

  return dataToRender
})

const map = createSlice({
  name: 'map',
  initialState: {
    coordinates: [],
    lat: 0,
    lng: 0,
    country: '',
    capital: '',
    flag: '',
    currency: '',
    city: '',
    status: '',
    error: '',
    isDeleteButtonVisible: false,
    inputValue: '',
    isMapModalVisible: false,
    routeCoordinates: {
      from: '',
      to: '',
    },
    ip: {
      lat: 0,
      lng: 0,
    },
    searxMap: [],
  },
  reducers: {
    setCoordinates(state, action) {
      state.lat = action.payload.lat
      state.lng = action.payload.lng
      state.country = action.payload.country
      state.capital = action.payload.capital
      state.flag = action.payload.flag
      state.currency = action.payload.currency
      state.city = action.payload.city
      state.routeCoordinates.from = action.payload.city
      return state
    },
    setIPCoordinates(state, action) {
      state.lat = action.payload.lat
      state.lng = action.payload.lng
      state.ip.lat = action.payload.lat
      state.ip.lng = action.payload.lng
      state.country = action.payload.country
      state.capital = action.payload.capital
      state.flag = action.payload.flag
      state.currency = action.payload.currency
      state.city = action.payload.city
      state.routeCoordinates.from = action.payload.city
      return state
    },
    setSearxMapData(state, action) {
      state.searxMap = [...action.paylod]
      return state
    },
    switchMapDeleteButton(state, action) {
      console.log(action.payload)
      if (action.payload.trim().length > 0) {
        state.isDeleteButtonVisible = true
      } else state.isDeleteButtonVisible = false
    },
    setMapInputValue(state, action) {
      state.inputValue = action.payload
    },
    deleteMapValue(state) {
      state.inputValue = ''
    },
    onModalVisible(state) {
      state.isMapModalVisible = !state.isMapModalVisible
    },
    setRouteFromValue(state, action) {
      state.routeCoordinates.from = action.payload
    },
    setRouteToValue(state, action) {
      state.routeCoordinates.to = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMapIp.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchMapIp.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        map.caseReducers.setIPCoordinates(state, action)
      })
      .addCase(fetchMapIp.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = 'Error occured'
      })
      .addCase(fetchLocationData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchLocationData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        map.caseReducers.setCoordinates(state, action)
      })
      .addCase(fetchLocationData.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = 'Error occured'
      })
      .addCase(fetchSearxMapData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchSearxMapData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        map.caseReducers.setSearxMapData(state, action)
      })
      .addCase(fetchSearxMapData.rejected, (state, action) => {
        state.status = 'rejected'
        state.error = 'Error occured'
      })
  },
})

export default map.reducer
export const {
  setCoordinates,
  switchMapDeleteButton,
  setMapInputValue,
  deleteMapValue,
  onModalVisible,
  setRouteFromValue,
  setRouteToValue,
  setSearxMapData,
} = map.actions
