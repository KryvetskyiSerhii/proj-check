import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { apiUrls } from 'api/urls'
import { getRequest } from 'api/apiClient'

const initialState = {
  shopping: [],
  cart: [],
}

export const fetchShoppingData = createAsyncThunk('shopping/fetchShoppingData', async url => {
  const options = {
    method: 'GET',
    url: apiUrls.getSearchResult.amazon,
    params: { keyword: url, country: 'US', page: '1' },
    headers: {
      'X-RapidAPI-Key': '05b8fdfb8fmsh9f4829ae5e458b9p1cc375jsn52dd066228f0',
      'X-RapidAPI-Host': 'amazon24.p.rapidapi.com',
    },
  }
  const response = await axios.request(options)
  console.log(response.data.docs)
  return response.data.docs
})

export const fetchFakeShoppingData = createAsyncThunk(
  'shopping/fetchFakeShoppingData',
  async url => {
    const response = await getRequest('https://fakestoreapi.com/products')
    console.log(response.data)
    return response.data
  }
)

const shoppingSlice = createSlice({
  name: 'shoppingSlice',
  initialState,
  reducers: {
    fillShoppingData(state, action) {
      state.shopping = [...action.payload]
      return state
    },
    addToCart(state, action) {
      let filteredItem = state.shopping.filter(e => e.id == action.payload)
      filteredItem[0].amount = 1
      let checkItem = false
      state.cart.forEach(e => {
        if (e.id == action.payload) {
          e.amount += 1
          checkItem = true
        } else return
      })
      if (!checkItem) state.cart.push(filteredItem[0])
      return state
    },
    deleteFromCart(state, action) {
      state.cart = state.cart.filter(e => e.id != action.payload)
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchShoppingData.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchShoppingData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        shoppingSlice.caseReducers.fillShoppingData(state, action)
      })
      .addCase(fetchShoppingData.rejected, state => {
        state.status = 'rejected'
      })
      .addCase(fetchFakeShoppingData.pending, state => {
        state.status = 'pending'
      })
      .addCase(fetchFakeShoppingData.fulfilled, (state, action) => {
        state.status = 'fulfilled'
        shoppingSlice.caseReducers.fillShoppingData(state, action)
      })
      .addCase(fetchFakeShoppingData.rejected, state => {
        state.status = 'rejected'
      })
  },
})

export default shoppingSlice.reducer
export const { fillShoppingData, addToCart, deleteFromCart } = shoppingSlice.actions
