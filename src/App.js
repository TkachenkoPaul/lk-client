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

const { Header, Content } = Layout

function App() {
  return (
    <>
      <Layout style={{ minHeight: '100vh' }}>
        <NavBar />
        <Content
          className="site-layout"
          style={{ padding: '0 50px', marginTop: 64 }}>
          <Row>
            <Col
              xs={{ span: 24 }}
              md={{ span: 20, offset: 2 }}
              lg={{ span: 18, offset: 3 }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
              </Breadcrumb>
              <div
                className="site-layout-background "
                style={{ padding: 24, minHeight: '100%' }}>
                {/*content place*/}
                <div className="site-page-header-ghost-wrapper">
                  <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Title"
                    subTitle="This is a subtitle"
                    extra={[
                      <Button key="3">Действие 1</Button>,
                      <Button key="2">Действие 2</Button>,
                      <Button key="1" type="primary">
                        Действие 3
                      </Button>,
                    ]}>
                    <Descriptions size="small" column={3}>
                      <Descriptions.Item label="Created">
                        Lili Qu
                      </Descriptions.Item>
                      <Descriptions.Item label="Association">
                        <a>421421</a>
                      </Descriptions.Item>
                      <Descriptions.Item label="Creation Time">
                        2017-01-10
                      </Descriptions.Item>
                      <Descriptions.Item label="Effective Time">
                        2017-10-10
                      </Descriptions.Item>
                      <Descriptions.Item label="Remarks">
                        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                      </Descriptions.Item>
                    </Descriptions>
                  </PageHeader>
                </div>
                <div className="site-page-header-ghost-wrapper">
                  <PageHeader
                    ghost={false}
                    onBack={() => window.history.back()}
                    title="Title"
                    subTitle="This is a subtitle"
                    extra={[
                      <Button key="3">Действие 1</Button>,
                      <Button key="2">Действие 2</Button>,
                      <Button key="1" type="primary">
                        Действие 3
                      </Button>,
                    ]}>
                    <Descriptions size="small" column={3}>
                      <Descriptions.Item label="Created">
                        Lili Qu
                      </Descriptions.Item>
                      <Descriptions.Item label="Association">
                        <a>421421</a>
                      </Descriptions.Item>
                      <Descriptions.Item label="Creation Time">
                        2017-01-10
                      </Descriptions.Item>
                      <Descriptions.Item label="Effective Time">
                        2017-10-10
                      </Descriptions.Item>
                      <Descriptions.Item label="Remarks">
                        Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
                      </Descriptions.Item>
                    </Descriptions>
                  </PageHeader>
                </div>
                <Row gutter={16} style={{ marginTop: 16, marginBottom: 16 }}>
                  <Col span={12}>
                    <Card type="inner" title="Контакты">
                      11111
                    </Card>
                  </Col>
                  <Col span={12}>
                    <Card
                      type="inner"
                      title="Inner Card title"
                      extra={<a href="#">More</a>}>
                      Inner Card content
                    </Card>
                  </Col>
                </Row>
                <Card title="Card title">
                  <Card
                    type="inner"
                    title="Inner Card title"
                    extra={<a href="#">More</a>}>
                    Inner Card content
                  </Card>
                  <Card
                    style={{ marginTop: 16 }}
                    type="inner"
                    title="Inner Card title"
                    extra={<a href="#">More</a>}>
                    Inner Card content
                  </Card>
                </Card>
              </div>
            </Col>
          </Row>
        </Content>
        <Footer />
      </Layout>
    </>
  )
}
export default App
