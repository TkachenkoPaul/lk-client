import React from 'react'
import { Menu } from 'antd'
const ProfilePageMenu = props => {
  return (
    <Menu key={'menu1'}>
      <Menu.Item onClick={props.showModalPhoneEdit} key="1">
        Редактировать телефон
      </Menu.Item>
      <Menu.Item onClick={props.handleSuccessPassword} key="2">
        Изменить пароль
      </Menu.Item>
    </Menu>
  )
}
export default ProfilePageMenu
