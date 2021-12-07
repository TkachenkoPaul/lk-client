import React from 'react'
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Descriptions,
  Layout,
  PageHeader,
  Row,
} from 'antd'
import './App.css'
import Footer from './components/layout/Footer/Footer'
import NavBar from './components/layout/Navbar/NavBar'
import InfoBoxes from './components/common/InfoBoxes/InfoBoxes'
import Profile from './components/Profile/Profile'

const { Header, Content } = Layout

function App() {
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/profile',
      breadcrumbName: 'Профиль',
    },
  ]
  return (
    <div style={{ height: '100%' }}>
      <Layout style={{ minHeight: '100vh' }}>
        <NavBar />
        <Layout>
          <Row type="flex">
            <Col
              xs={{ span: 24 }}
              md={{ span: 20, offset: 2 }}
              lg={{ span: 18, offset: 3 }}>
              <Content
                className="site-layout"
                style={{ padding: '0 15px', marginTop: 80 }}>
                {/*content block*/}
                <Profile />
                {/*end of content block*/}
              </Content>
            </Col>
          </Row>
        </Layout>
        <Footer />
      </Layout>
    </div>
  )
}
export default App
