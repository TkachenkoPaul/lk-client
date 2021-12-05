import React from 'react'
import './App.css'
import { Breadcrumb, Layout, Menu } from 'antd'
import SideBar from './components/layout/sider/SideBar'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const App = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <SideBar />
      <Layout className="site-layout">
        {/*<Header*/}
        {/*  className="site-layout-sub-header-background"*/}
        {/*  style={{ padding: 0 }}*/}
        {/*/>*/}
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: '100%' }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>yo yo yo</Footer>
      </Layout>
    </Layout>
  )
}

export default App
