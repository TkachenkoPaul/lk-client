import React, { useState } from 'react'
import './NavBar.module.scss'
import logoImage from '../sider/smallLogo.png'
import { Col, Layout, Menu, Row } from 'antd'
import {
  AppstoreOutlined,
  CommentOutlined,
  DashboardOutlined,
  ExportOutlined,
  IdcardOutlined,
  ProfileOutlined,
  WalletOutlined,
} from '@ant-design/icons'

const NavBar = ({ menu }) => {
  const [currentKey, setCurrentKey] = useState('1')
  const handleClick = e => {
    console.log('click ', e)
    setCurrentKey(e.key)
  }
  return (
    <>
      <Layout.Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          padding: '0 15px',
        }}>
        <Row>
          <Col
            xs={{ span: 24 }}
            md={{ span: 20, offset: 2 }}
            lg={{ span: 18, offset: 3 }}>
            <img src={logoImage} alt="site logo" className="logo" />
            <Menu
              theme="dark"
              onClick={handleClick}
              selectedKeys={[currentKey]}
              mode="horizontal">
              <Menu.Item key="1" icon={<IdcardOutlined />}>
                Профиль
              </Menu.Item>
              <Menu.Item key="2" icon={<WalletOutlined />}>
                Денежные операции
              </Menu.Item>
              <Menu.Item key="3" icon={<CommentOutlined />}>
                Заявки
              </Menu.Item>
              <Menu.Item key="4" icon={<DashboardOutlined />}>
                <a
                  href="https://www.speedtest.net/ru"
                  target="_blank"
                  rel="noopener noreferrer">
                  Speedtest
                </a>
              </Menu.Item>
              <Menu.Item key="5" icon={<ExportOutlined />}>
                Выход
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </>
  )
}
export default NavBar
