import React from 'react'
import { BackTop, Col, Layout, Row } from 'antd'
import './App.css'
import Footer from './components/layout/Footer/Footer'
import NavBar from './components/layout/Navbar/NavBar'
import Services from './components/Services/Services'

const { Content } = Layout

function App() {
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
                {/*<Profile />*/}
                {/*<Transactions />*/}
                {/*<Support />*/}
                <Services />
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
  )
}
export default App
