import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRequest } from 'api/apiClient'
import { apiUrls } from 'api/urls'
import axios from 'axios'

const initialState = {
  newsList: [],
  searxNews: [],
  newsInputValue: '',
  isNewsDeleteButtonVisible: false,
}

export const fetchNewsData = createAsyncThunk('images/fetchImageData', async query => {
  const options = {
    method: 'GET',
    url: `${apiUrls.getSearchResult.news}`,
    params: { q: `${query}`, pageSize: '100', autoCorrect: 'true' },
    headers: {
      'X-RapidAPI-Key': '05b8fdfb8fmsh9f4829ae5e458b9p1cc375jsn52dd066228f0',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  }
  const response = await axios(options)
  console.log(response.data.value)
  return response.data.value
})

export const fetchSearxNewsData = createAsyncThunk('searxNews, fetchSearxNewsData', async query => {
  const response = await getRequest(
    `https://cors-anywhere.herokuapp.com/${apiUrls.getSearchResult.searx.searxNews}${query}`
  )
  console.log(response.data.results)
  return response.data.results
})
const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setNewsList(state, action) {
      state.newsList = [...action.payload]
      return state
    },
    setSearxNewsData(state, action) {
      state.searxNews = [...action.payload]
      return state
    },
    switchNewsDeleteButton(state, action) {
      if (action.payload.trim().length > 0) {
        state.isNewsDeleteButtonVisible = true
      } else state.isNewsDeleteButtonVisible = false
    },
    deleteNewsInputValue(state) {
      state.newsInputValue = ''
    },
    setNewsInputValue(state, action) {
      state.newsInputValue = action.payload
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNewsData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchNewsData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        newsSlice.caseReducers.setNewsList(state, action)
      })
      .addCase(fetchNewsData.rejected, state => {
        state.status = 'rejected'
      })
      .addCase(fetchSearxNewsData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchSearxNewsData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        newsSlice.caseReducers.setSearxNewsData(state, action)
      })
      .addCase(fetchSearxNewsData.rejected, state => {
        state.status = 'rejected'
      })
  },
})

export default newsSlice.reducer
export const {
  setNewsList,
  switchNewsDeleteButton,
  deleteNewsInputValue,
  setNewsInputValue,
  setSearxNewsData,
} = newsSlice.actions
