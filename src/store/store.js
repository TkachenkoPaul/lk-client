import { combineReducers, configureStore } from '@reduxjs/toolkit'
import supportReducer from './slices/supportSlice'
import profileReducer from './slices/profileSlice'
import paymentsReducer from './slices/paymentsSlice'
import authReducer from './slices/authSlice'
import testReducer from './slices/testSlice'
import feesReducer from './slices/feesSlice'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()
const rootReducer = combineReducers({
  auth: authReducer,
  profile: profileReducer,
  payments: paymentsReducer,
  fees: feesReducer,
  support: supportReducer,
  test: testReducer,
})

export default configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
})
sagaMiddleware.run(rootSaga)
