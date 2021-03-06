import './App.css'

import { BackTop, Button, Col, Layout, Result, Row } from 'antd'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { clearErrors, isErrors } from '../src/store/slices/errorSlice'
import { useDispatch, useSelector } from 'react-redux'

import Error from './components/Errors/Error'
import Footer from './components/layout/Footer/Footer'
import Loader from './components/common/Loader'
import Login from './components/Login/Login'
import Logout from './components/Logout/Logout'
import Message from './components/Support/Message'
import NavBar from './components/layout/Navbar/NavBar'
import Profile from './components/Profile/Profile'
import Reference from './components/Reference/Reference'
import Services from './components/Services/Services'
import Support from './components/Support/Support'
import Transactions from './components/Transactions/Transactions'
import { getProfile } from './store/actionCreators/ProfileActionCreator'
import { useAuth } from './hooks/useAuth'
import { useID } from './hooks/useID'

const { Content } = Layout

function App() {
  // TODO добавить  индикатор загрузки
  // TODO разобраться с хлебными крошками
  // TODO добавить кастомный скролбар
  // TODO доработать индикатор загрузки

  const navigate = useNavigate()
  const login = useID()
  const authUser = useAuth()
  const dispatch = useDispatch()
  const error = useSelector(state => state.errors)
  // useEffect(() => {
  //   dispatch(getProfile())
  // }, [dispatch])

  useEffect(() => {
    console.log('1 !authUser.isAuth:', !authUser.isAuth)
    console.log('2 authUser.isAuth:', authUser.isAuth)
    if (!authUser.isAuth) {
      console.log('need to go to login page')
      navigate('login')
      return ''
    } else {
      console.log('need to get profile information')
      dispatch(getProfile())
    }
    // if (!authUser.token & !authUser.isAuth) {
    //   navigate('/login')
    // }
  }, [authUser.isAuth, navigate, dispatch, error])

  // if (!!authUser.error.code) {
  //   return (
  //     <Result
  //       status="404"
  //       title={authUser.error.code}
  //       subTitle={authUser.error.message}
  //       extra={
  //         <Button
  //           onClick={() => {
  //             navigate('/')
  //           }}
  //           type="primary">
  //           Главная
  //         </Button>
  //       }
  //     />
  //   )
  // }

  // if (!!error.isErrors) {
  //   console.log('!!error.isErrors', error)
  //   let status = ''
  //   let title = ''
  //   let subTitle = ''
  //   if (error.errors.status === '404') {
  //     status = 404
  //     title = 404
  //     subTitle = error.errors.message
  //   } else {
  //     status = error.errors.status
  //     title = error.errors.status
  //     subTitle = error.errors.data.msg
  //   }
  //   return (
  //     <Result
  //       status={403}
  //       title={'title'}
  //       subTitle={'subTitle'}
  //       extra={
  //         <Button
  //           onClick={() => {
  //             // navigate('/')
  //             dispatch(clearErrors())
  //             dispatch(isErrors(false))
  //           }}
  //           type="primary">
  //           Главная
  //         </Button>
  //       }
  //     />
  //   )
  // }

  return (
    <div className="sc1">
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route
            index
            element={<Profile errors={error.isErrors} login={login} />}
          />
          <Route
            path="/transactions"
            element={<Transactions login={login} />}
          />
          <Route path="/support" element={<Support login={login} />} />
          <Route path="/loader" element={<Loader />} />
          <Route
            path="/support/message/:messageId"
            element={<Message login={login} />}
          />
          <Route path="/services" element={<Services login={login} />} />
          <Route path="/reference" element={<Reference login={login} />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/login" element={<Outlet />}>
          <Route index element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}
const PageContent = () => {
  const style = {
    height: 40,
    width: 40,
    lineHeight: '40px',
    borderRadius: 4,
    backgroundColor: '#1088e9',
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  }
  return (
    <>
      <div style={{ height: '100%' }}>
        <Layout style={{ minHeight: '100vh' }}>
          <NavBar />
          <Layout>
            <Row>
              <Col
                xs={{ span: 24 }}
                md={{ span: 20, offset: 2 }}
                lg={{ span: 18, offset: 3 }}>
                <Content
                  className="site-layout"
                  style={{ padding: '0 15px', marginTop: 80 }}>
                  {/*content block*/}
                  <Outlet />
                  {/*end of content block*/}
                </Content>
              </Col>
            </Row>
          </Layout>
          <BackTop visibilityHeight={400}>
            <div style={style} className="align-middle">
              <i className="fas fa-angle-double-up" />
            </div>
          </BackTop>
          <Footer />
        </Layout>
      </div>
    </>
  )
}
export default App
