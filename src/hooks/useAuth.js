import { useDispatch, useSelector } from 'react-redux'
import {
  deleteToken,
  setAuth,
  setNotAuth,
  setToken,
} from '../store/slices/authSlice'

const useAuth = () => {
  const dispatch = useDispatch()
  const isAuth = localStorage.getItem('isAuth')
  const token = localStorage.getItem('token')
  const auth = useSelector(state => state.auth)
  if (isAuth && token) {
    if (!auth.token && !auth.isAuth) {
      dispatch(setToken({ token: token }))
      dispatch(setAuth())
    }
    return {
      isAuth: isAuth,
      token: token,
      error: { code: auth.error.code, message: auth.error.message },
    }
  } else {
    dispatch(setNotAuth())
    dispatch(deleteToken())
    return {
      isAuth: false,
      token: null,
      error: { code: auth.error.code, message: auth.error.message },
    }
  }
}
export { useAuth }
