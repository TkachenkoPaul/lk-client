import { combineReducers, configureStore } from '@reduxjs/toolkit'
import supportReducer from './slices/supportSlice'
import profileReducer from './slices/profileSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import logger from 'redux-logger'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  profile: profileReducer,
  support: supportReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger],
})
sagaMiddleware.run(rootSaga)
