import { combineReducers, configureStore } from '@reduxjs/toolkit'
import supportReducer from './slices/supportSlice'
import profileReducer from './slices/profileSlice'
const rootReducer = combineReducers({
  profile: profileReducer,
  support: supportReducer,
})
export default configureStore({
  reducer: rootReducer,
})
