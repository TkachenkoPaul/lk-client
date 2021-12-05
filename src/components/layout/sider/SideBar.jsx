import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [siderWidth, setSiderWidth] = useState(0)
  const collapse = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={collapse}
      breakpoint="md"
      collapsedWidth={siderWidth}
      width="250"
      onBreakpoint={broken => {
        console.log('breakpoint is get', broken)
      }}>
      <div style={{ color: 'white', minHeight: 54 }}>
        <h3>Личный кабинет</h3>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />}>
          Files
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default SideBar
