import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { apiUrls } from 'api/urls'
import { getRequest } from 'api/apiClient'
import axios from 'axios'
import { COUNTRIES } from 'constants/arraysConstants'

const initialState = {
  status: '',
  universities: [],
  webPages: [],
  searxGeneral: [],
  searchSuggestions: [],
  url: '',
  error: 'Connection error occured',
  countries: COUNTRIES,
  wikiSearch: [],
  inputValue: '',
  isLoading: false,
  rightClickMenu: {
    onShow: false,
    web: false,
    images: false,
    videos: false,
    news: false,
    maps: false,
    academics: false,
    shopping: false,
    link: '/results',
  },
}

export const fetchSearchData = createAsyncThunk('universities/fetchSearchData', async url => {
  const response = await getRequest(`${apiUrls.getSearchResult.universitiesUrl}${url}`)
  return response.data
})

export const fetchSearxData = createAsyncThunk('searxGeneral/fetchSearxData', async url => {
  const response = await getRequest(
    `https://cors-anywhere.herokuapp.com/${apiUrls.getSearchResult.searx.searxGeneral}${url}`
  )
  console.log(response.data.results)
  return response.data.results
})

export const fetchWikiData = createAsyncThunk('wikiSearch/fetchWikiDAta', async url => {
  const response = await getRequest(`${apiUrls.getSearchResult.wikiUrl}${url}`)
  return response.data.query.search
})

export const fetchWebPageData = createAsyncThunk('webPages/fetchWebPagesData', async query => {
  const options = {
    method: 'GET',
    url: `${apiUrls.getSearchResult.webPages}`,
    params: { q: `${query}`, pageSize: '100', autoCorrect: 'true' },
    headers: {
      'X-RapidAPI-Key': '05b8fdfb8fmsh9f4829ae5e458b9p1cc375jsn52dd066228f0',
      'X-RapidAPI-Host': 'contextualwebsearch-websearch-v1.p.rapidapi.com',
    },
  }
  const response = await axios(options)
  return response.data.value
})

export const fetchSuggestionData = createAsyncThunk(
  'searchSuggestions, fetchSuggestionData',
  async word => {
    const response = await getRequest(`${apiUrls.getSearchResult.spellSuggestions}${word}`)
    console.log(response)
    return response.data
  }
)

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setUniversities(state, action) {
      state.universities = [...action.payload]
      return state
    },
    searchUni(state, action) {
      state.url = state.countries.filter(e =>
        e.toLowerCase().includes(action.payload.toLowerCase())
      )[0]
      return state
    },
    setWikiSearch(state, action) {
      state.wikiSearch = [...action.payload]
      return state
    },
    setInputValue(state, action) {
      state.inputValue = action.payload
      return state
    },
    setWebPages(state, action) {
      state.webPages = [...action.payload]
      return state
    },
    setSearxGeneral(state, action) {
      state.searxGeneral = [...action.payload]
      return state
    },
    setImages(state, action) {
      state.images = [...action.payload]
      return state
    },
    setSearchSuggestions(state, action) {
      state.searchSuggestions = [...action.payload]
    },
    clearSearchSuggestions(state) {
      state.searchSuggestions = []
    },
    onRightClickMenu(state) {
      state.rightClickMenu.onShow = true
    },
    offRightClickMenu(state) {
      state.rightClickMenu.onShow = false
    },
    switchSearchingOptions(state, action) {
      if (action.payload === 'results') {
        state.rightClickMenu.web = true
        state.rightClickMenu.images = false
        state.rightClickMenu.videos = false
        state.rightClickMenu.news = false
        state.rightClickMenu.maps = false
        state.rightClickMenu.academics = false
        state.rightClickMenu.shopping = false
        state.rightClickMenu.link = `/${action.payload}`
      } else if (action.payload === 'images') {
        state.rightClickMenu.images = true
        state.rightClickMenu.web = false
        state.rightClickMenu.videos = false
        state.rightClickMenu.news = false
        state.rightClickMenu.maps = false
        state.rightClickMenu.academics = false
        state.rightClickMenu.shopping = false
        state.rightClickMenu.link = `/${action.payload}`
      } else if (action.payload === 'videos') {
        state.rightClickMenu.videos = true
        state.rightClickMenu.web = false
        state.rightClickMenu.images = false
        state.rightClickMenu.news = false
        state.rightClickMenu.maps = false
        state.rightClickMenu.academics = false
        state.rightClickMenu.shopping = false
        state.rightClickMenu.link = `/${action.payload}`
      } else if (action.payload === 'news') {
        state.rightClickMenu.news = true
        state.rightClickMenu.web = false
        state.rightClickMenu.images = false
        state.rightClickMenu.videos = false
        state.rightClickMenu.maps = false
        state.rightClickMenu.academics = false
        state.rightClickMenu.shopping = false
        state.rightClickMenu.link = `/${action.payload}`
      } else if (action.payload === 'maps') {
        state.rightClickMenu.maps = true
        state.rightClickMenu.web = false
        state.rightClickMenu.images = false
        state.rightClickMenu.videos = false
        state.rightClickMenu.news = false
        state.rightClickMenu.academics = false
        state.rightClickMenu.shopping = false
        state.rightClickMenu.link = `/${action.payload}`
      } else if (action.payload === 'academics') {
        state.rightClickMenu.academics = true
        state.rightClickMenu.maps = false
        state.rightClickMenu.web = false
        state.rightClickMenu.images = false
        state.rightClickMenu.videos = false
        state.rightClickMenu.news = false
        state.rightClickMenu.shopping = false
        state.rightClickMenu.link = `/${action.payload}`
      } else if (action.payload === 'ecommerce') {
        state.rightClickMenu.shopping = true
        state.rightClickMenu.academics = false
        state.rightClickMenu.maps = false
        state.rightClickMenu.web = false
        state.rightClickMenu.images = false
        state.rightClickMenu.videos = false
        state.rightClickMenu.news = false
        state.rightClickMenu.link = `/${action.payload}`
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSearchData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchSearchData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        search.caseReducers.setUniversities(state, action)
      })
      .addCase(fetchSearchData.rejected, (state, action) => {
        state.status = 'rejected'
      })
      .addCase(fetchWikiData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchWikiData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        search.caseReducers.setWikiSearch(state, action)
      })
      .addCase(fetchWikiData.rejected, (state, action) => {
        state.status = 'rejected'
      })
      .addCase(fetchWebPageData.pending, state => {
        state.status = 'pending'
        state.isLoading = true
      })
      .addCase(fetchWebPageData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        search.caseReducers.setWebPages(state, action)
        state.isLoading = false
      })
      .addCase(fetchWebPageData.rejected, state => {
        state.status = 'rejected'
        state.isLoading = false
      })
      .addCase(fetchSearxData.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchSearxData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        search.caseReducers.setSearxGeneral(state, action)
      })
      .addCase(fetchSearxData.rejected, state => {
        state.status = 'rejected'
      })
      .addCase(fetchSuggestionData.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchSuggestionData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        search.caseReducers.setSearchSuggestions(state, action)
      })
      .addCase(fetchSuggestionData.rejected, state => {
        state.status = 'rejected'
      })
  },
})

export default search.reducer
export const {
  setUniversities,
  searchUni,
  setWikiSearch,
  setInputValue,
  onRightClickMenu,
  offRightClickMenu,
  switchSearchingOptions,
  setSearxGeneral,
  clearSearchSuggestions,
} = search.actions
