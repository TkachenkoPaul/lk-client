import { createSlice } from '@reduxjs/toolkit'
import { profileInitialState } from '../initialState'

const profileSlice = createSlice({
  name: 'profile',
  initialState: profileInitialState,
  reducers: {},
})
export const {} = profileSlice.actions
export default profileSlice.reducer
