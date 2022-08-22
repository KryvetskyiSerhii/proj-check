import { createSlice } from '@reduxjs/toolkit'

const result = createSlice({
  name: 'result',
  initialState: {
    isRocketFly: false,
    isRocketJump: false,
  },
  reducers: {
    letRocketFly(state) {
      state.isRocketFly = !state.isRocketFly
    },
    letRocketJump(state) {
      state.isRocketJump = !state.isRocketJump
    },
    stopRocketJump(state) {
      state.isRocketJump = false
    },
  },
})

export default result.reducer
export const { letRocketFly, letRocketJump, stopRocketJump } = result.actions
