import { AUTH_USER } from '../actions/AuthActions'
import { authInitialState } from '../initialState'

const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case AUTH_USER: {
      console.log('auth action ', action)
      return {
        auth: true,
      }
    }
    default:
      return { ...state }
  }
}
export default authReducer
