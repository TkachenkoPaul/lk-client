import { combineReducers, configureStore } from '@reduxjs/toolkit'
import supportReducer from './slices/supportSlice'
import profileReducer from './slices/profileSlice'
import authReducer from './slices/authSlice'
import testReducer from './slices/testSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import logger from 'redux-logger'
//import authReducer from './reducers/AuthReducer'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  support: supportReducer,
  test: testReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
