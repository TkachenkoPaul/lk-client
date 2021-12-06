import React, { useState } from 'react'
import { Button, Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import './NavBar.css'
import logo from './logo.png'

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false)
  return (
    <nav className="navbar">
      <Button
        className="menu"
        type="primary"
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title="Навигация"
        placement="left"
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}>
        {menu}
      </Drawer>
      <a href="/">
        <img src={logo} className="logo" alt="logo" />
      </a>
    </nav>
  )
}
export default NavBar
