import { createSlice } from '@reduxjs/toolkit'
import { profileInitialState } from '../initialState'

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {
    setStarShips: (state, action) => {
      state.starships.data.push(...action.payload)
    },
    setStarShipsIsLoading: state => {
      state.starships.isLoading = true
    },
    setStarShipsLoaded: state => {
      state.starships.isLoading = false
    },
  },
})
export const { setStarShips, setStarShipsIsLoading, setStarShipsLoaded } =
  profileSlice.actions
export default profileSlice.reducer
