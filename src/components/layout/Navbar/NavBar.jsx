import React, { useEffect, useState } from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import {
  AppstoreAddOutlined,
  CommentOutlined,
  DashboardOutlined,
  IdcardOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import './NavBar.module.scss'
import logoImage from '../sider/smallLogo.png'

const NavBar = () => {
  const [currentKey, setCurrentKey] = useState(null)
  const location = useLocation()
  useEffect(() => {
    if (currentKey === null) {
      setCurrentKey(location.pathname)
    }
  })

  const navigate = useNavigate()
  const menus = [
    {
      key: 1,
      title: 'Профиль',
      path: '/',
      icon: <IdcardOutlined />,
    },
    {
      key: 2,
      title: 'Финансы',
      path: '/transactions',
      icon: <WalletOutlined />,
    },
    {
      key: 3,
      title: 'Заявки',
      path: '/support',
      icon: <CommentOutlined />,
    },
    {
      key: 4,
      title: 'Услуги',
      path: '/services',
      icon: <AppstoreAddOutlined />,
    },
    {
      key: 5,
      title: 'Speedtest',
      path: '/speedtest',
      icon: <DashboardOutlined />,
    },
    {
      key: 6,
      title: 'Выход',
      path: '/logout',
      icon: <AppstoreAddOutlined />,
    },
  ]
  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  const menusElements = menus.map(menu => {
    return (
      <Menu.Item key={menu.path} icon={menu.icon}>
        {menu.title}
      </Menu.Item>
    )
  })
  const handleClick = e => {
    if (e.key !== '/speedtest') {
      navigate(e.key)
      setCurrentKey(e.key)
    } else {
      openInNewTab('https://www.speedtest.net/ru')
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
              {menusElements}
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </>
  )
}
export default NavBar
