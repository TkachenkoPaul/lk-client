import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setNotAuth } from '../../store/slices/authSlice'
import { useNavigate } from 'react-router-dom'
const Logout = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(setNotAuth())
    navigate('/')
  }, [])

  return <></>
}
export default Logout
