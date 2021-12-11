import React, { useState } from 'react'
import './NavBar.module.scss'
import logoImage from '../sider/smallLogo.png'
import { Col, Layout, Menu, Row } from 'antd'
import {
  AppstoreAddOutlined,
  CommentOutlined,
  DashboardOutlined,
  ExportOutlined,
  IdcardOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
  const navigate = useNavigate()
  const [currentKey, setCurrentKey] = useState('1')
  const handleClick = e => {
    if (e.key !== '/speedtest') {
      navigate(e.key)
      setCurrentKey(e.key)
    }
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
              <Menu.Item key="/" icon={<IdcardOutlined />}>
                Профиль
              </Menu.Item>
              <Menu.Item key="/transactions" icon={<WalletOutlined />}>
                Финансы
              </Menu.Item>
              <Menu.Item key="/support" icon={<CommentOutlined />}>
                Заявки
              </Menu.Item>
              <Menu.Item key="/services" icon={<AppstoreAddOutlined />}>
                Услуги
              </Menu.Item>
              <Menu.Item key="/speedtest" icon={<DashboardOutlined />}>
                <a
                  href="https://www.speedtest.net/ru"
                  target="_blank"
                  rel="noopener noreferrer">
                  Speedtest
                </a>
              </Menu.Item>
              <Menu.Item key="/logout" icon={<ExportOutlined />}>
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
