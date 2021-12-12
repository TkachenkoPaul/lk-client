import { createStore, combineReducers } from 'redux'
import profileReducer from './reducers/ProfileReducer'
let reducer = combineReducers({
  profileReducer: profileReducer,
})
const store = createStore(reducer)

export default store
