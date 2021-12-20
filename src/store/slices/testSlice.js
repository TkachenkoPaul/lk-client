import { createSlice } from '@reduxjs/toolkit'
import { testInitialState } from '../initialState'

const testSlice = createSlice({
  name: 'test',
  initialState: testInitialState,
  reducers: {
    setStarShips: (state, action) => {
      state.starships.data.push(...action.payload)
    },
    setTotalCount: (state, action) => {
      state.starships.total = action.payload
    },
    setStarShipsIsLoading: state => {
      state.starships.isLoading = true
    },
    setStarShipsLoaded: state => {
      state.starships.isLoading = false
    },
  },
})
export const {
  setStarShips,
  setTotalCount,
  setStarShipsIsLoading,
  setStarShipsLoaded,
} = testSlice.actions
export default testSlice.reducer
