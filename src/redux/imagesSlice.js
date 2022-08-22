import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRequest } from 'api/apiClient'
import { apiUrls } from 'api/urls'
import axios from 'axios'

const initialState = {
  images: [],
  imagesSearx: [],
  imagesInputValue: '',
  isDeleteButtonVisible: false,
}

export const fetchImageData = createAsyncThunk('images/fetchImageData', async query => {
  const options = {
    method: 'GET',
    url: `${apiUrls.getSearchResult.images}`,
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

export const fetchSearxImageData = createAsyncThunk(
  'imagesSearx, fetchSearxImageData',
  async url => {
    const response = await getRequest(
      `https://cors-anywhere.herokuapp.com/${apiUrls.getSearchResult.searx.searxIamges}${url}`
    )
    console.log(response.data.results)
    return response.data.results
  }
)

const imagesSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    setImagesData(state, action) {
      state.images = [...action.payload]
      return state
    },
    setImagesInputValue(state, action) {
      state.imagesInputValue = action.payload
    },
    setSearxImageData(state, action) {
      state.searxIamges = [...action.payload]
      return state
    },
    switchDeleteButton(state, action) {
      if (action.payload.trim().length > 0) {
        state.isDeleteButtonVisible = true
      } else state.isDeleteButtonVisible = false
    },
    deleteValue(state) {
      state.imagesInputValue = ''
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchImageData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchImageData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        imagesSlice.caseReducers.setImagesData(state, action)
      })
      .addCase(fetchImageData.rejected, state => {
        state.status = 'rejected'
      })
      .addCase(fetchSearxImageData.pending, (state, action) => {
        state.status = 'pending'
      })
      .addCase(fetchSearxImageData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        imagesSlice.caseReducers.setSearxImageData(state, action)
      })
      .addCase(fetchSearxImageData.rejected, state => {
        state.status = 'rejected'
      })
  },
})

export default imagesSlice.reducer
export const {
  setImagesData,
  setImagesInputValue,
  switchDeleteButton,
  deleteValue,
  setSearxImageData,
} = imagesSlice.actions
