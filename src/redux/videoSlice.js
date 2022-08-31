import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRequest } from 'api/apiClient'
import { apiUrls } from 'api/urls'
import axios from 'axios'

const initialState = {
  videos: [],
  popularVideos: [],
  vimeoVideos: [],
  trendingVideos: [],
  audios: [],
  status: '',
  isLoading: false,
  isCategoryActive: false,
  isHoverModal: false,
  isHoverVerticalModal: false,
  videoInputValue: '',
  isVideoDeleteButtonVisible: false,
}

export const fetchVideoData = createAsyncThunk('videos/fetchVideoData', async url => {
  const response = await getRequest(
    `${apiUrls.getSearchResult.videos.search}${typeof url === 'string' ? url : url.category}${
      url.sort ? '&sort=' + url.sort : ''
    }`
  )
  console.log(response.data)
  return response.data
})

export const fetchPopularVideo = createAsyncThunk('popularVideos/fetchPopularVideo', async () => {
  const response = await getRequest(`${apiUrls.getSearchResult.videos.popular}`)
  console.log(response.data)
  return response.data
})

export const fetchTrendingVideo = createAsyncThunk(
  'trendingVideos/fetchTrendingVideo',
  async () => {
    const response = await getRequest(apiUrls.getSearchResult.videos.trending)
    return response.data
  }
)

export const fetchVimeoVideoData = createAsyncThunk(
  'vimeoVideos/fetchVimeoVideoData',
  async url => {
    const response = await getRequest(`${apiUrls.getSearchResult.vimeo}${url}`)
    console.log(response.data.data)
    return response.data.data
  }
)

const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    setVideosList(state, action) {
      state.videos = [...action.payload]
      state.trendingVideos = []
      return state
    },
    setPopularVideos(state, action) {
      state.popularVideos = [...action.payload]

      return state
    },

    setVimeoVideoList(state, action) {
      state.vimeoVideos = [...action.payload]
      return state
    },

    serTrendingVideoList(state, action) {
      state.trendingVideos = [...action.payload]
      state.popularVideos = []
      state.videos = []
      return state
    },
    setAudioList(state, action) {
      state.audios = [...action.payload]
    },
    onHoverModal(state) {
      state.isHoverModal = true
    },
    offHoverModal(state) {
      state.isHoverModal = false
    },
    onVerticalHoverModal(state) {
      state.isHoverVerticalModal = true
    },
    offVerticalHoverModal(state) {
      state.isHoverVerticalModal = false
    },
    setVideoInputValue(state, action) {
      state.videoInputValue = action.payload
    },
    switchVideoDeleteButton(state, action) {
      if (action.payload.trim().length > 0) {
        state.isVideoDeleteButtonVisible = true
      } else state.isVideoDeleteButtonVisible = false
    },
    deleteValue(state) {
      state.videoInputValue = ''
    },
    switchCategorySatus(state) {
      state.isCategoryActive = !state.isCategoryActive
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchVideoData.pending, (state, action) => {
        state.status = 'pending'
        state.isLoading = true
      })
      .addCase(fetchVideoData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        videoSlice.caseReducers.setVideosList(state, action)
        state.isLoading = false
      })
      .addCase(fetchVideoData.rejected, state => {
        state.status = 'rejected'
        state.isLoading = false
      })
      .addCase(fetchVimeoVideoData.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchVimeoVideoData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        videoSlice.caseReducers.setVimeoVideoList(state, action)
      })
      .addCase(fetchVimeoVideoData.rejected, state => {
        state.status = 'rejected'
      })
      .addCase(fetchPopularVideo.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchPopularVideo.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        videoSlice.caseReducers.setPopularVideos(state, action)
      })
      .addCase(fetchPopularVideo.rejected, state => {
        state.status = 'rejected'
      })
      .addCase(fetchTrendingVideo.pending, state => {
        state.status = 'pending'
        state.isLoading = true
      })
      .addCase(fetchTrendingVideo.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        videoSlice.caseReducers.serTrendingVideoList(state, action)
        state.isLoading = false
      })
      .addCase(fetchTrendingVideo.rejected, state => {
        state.status = 'rejected'
        state.isLoading = false
      })
  },
})

export default videoSlice.reducer
export const {
  setVideosList,
  onHoverModal,
  offHoverModal,
  setVideoInputValue,
  switchVideoDeleteButton,
  deleteValue,
  onVerticalHoverModal,
  offVerticalHoverModal,
  setPopularVideos,
  switchCategorySatus,
} = videoSlice.actions
