import React from 'react'
import { BackTop, Col, Layout, Row } from 'antd'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/layout/Footer/Footer'
import NavBar from './components/layout/Navbar/NavBar'
import Profile from './components/Profile/Profile'
import Transactions from './components/Transactions/Transactions'
import Support from './components/Support/Support'
import Services from './components/Services/Services'
import Error from './components/Errors/Error'
import './App.css'
import Message from './components/Support/Message'
import Reference from './components/Reference/Reference'

const { Content } = Layout

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PageContent />}>
          <Route index element={<Profile />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route exact={true} path="/support" element={<Support />} />
          <Route path="/support/message/:id" element={<Message />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/logout" element={<>logout page</>} />
        <Route
          path="/login"
          element={
            <>
              login page 1234 <Outlet />
            </>
          }>
          <Route index element={<>login page</>} />
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
