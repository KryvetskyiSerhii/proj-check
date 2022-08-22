import { createSlice } from '@reduxjs/toolkit'
import { SLIDER } from 'constants/arraysConstants'
import { CAROUSEL } from 'constants/arraysConstants'

const slider = createSlice({
  name: 'slider',
  initialState: {
    sliderData: SLIDER,
    carouselData: CAROUSEL,
  },
  reducers: {},
})

export default slider.reducer
export const {} = slider.actions
