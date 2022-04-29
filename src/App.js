import './App.css'

import { BackTop, Button, Col, Layout, Result, Row } from 'antd'
import {
  Outlet,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import React, { useEffect } from 'react'

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
import Test from './components/Test'
import Transactions from './components/Transactions/Transactions'
import { getProfile } from './store/actionCreators/ProfileActionCreator'
import { useAuth } from './hooks/useAuth'
import { useDispatch } from 'react-redux'
import { useID } from './hooks/useID'

const { Content } = Layout

function App() {
  // TODO добавить  индикатор загрузки
  // TODO разобраться с хлебными крошками
  // TODO добавить кастомный скролбар

  const navigate = useNavigate()
  const location = useLocation()
  const login = useID()
  const authUser = useAuth()
  const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(getProfile())
  // }, [dispatch])

  useEffect(() => {
    if (!authUser.isAuth) {
      navigate('/login')
    } else {
      dispatch(getProfile())
    }
    // if (!authUser.token & !authUser.isAuth) {
    //   navigate('/login')
    // }
  }, [authUser.isAuth, navigate, dispatch])

  if (!!authUser.error.code) {
    return (
      <Result
        status="404"
        title={authUser.error.code}
        subTitle={authUser.error.message}
        extra={
          <Button
            onClick={() => {
              navigate('/')
            }}
            type="primary">
            Главная
          </Button>
        }
      />
    )
  }

  return (
    <div className="sc1">
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route index element={<Profile login={login} />} />
          <Route
            path="/transactions"
            element={<Transactions login={login} />}
          />
          <Route path="/support" element={<Support login={login} />} />
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
