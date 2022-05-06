import { combineReducers, configureStore } from '@reduxjs/toolkit'

import authReducer from './slices/authSlice'
import createSagaMiddleware from 'redux-saga'
import errorReducer from './slices/errorSlice'
import feesReducer from './slices/feesSlice'
import paymentsReducer from './slices/paymentsSlice'
import profileReducer from './slices/profileSlice'
import rootSaga from './sagas'
import supportReducer from './slices/supportSlice'
import testReducer from './slices/testSlice'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  payments: paymentsReducer,
  fees: feesReducer,
  support: supportReducer,
  errors: errorReducer,
  test: testReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
