import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setNotAuth } from '../../store/slices/authSlice'
const Logout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setNotAuth())
  }, [])

  return <></>
}
export default Logout
