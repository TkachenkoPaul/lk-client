import React, { useEffect, useState } from 'react'
import {
  Breadcrumb,
  Button,
  Col,
  Descriptions,
  Dropdown,
  Image,
  Menu,
  PageHeader,
  Row,
} from 'antd'
import { Link, useParams } from 'react-router-dom'
import Chat from './Chat'
import { useID } from '../../hooks/useID'
import { logger } from 'redux-logger/src'
import { useDispatch, useSelector } from 'react-redux'
import { getMessage } from '../../store/actionCreators/SupportActionCreator'
import MessageInformation from './MessageInformation'

const Message = () => {
  const dispatch  = useDispatch()
  const message = useSelector(state => state.support.message.data)
  const { messageId } = useParams()
  const userID = useID()
  const [visible, setVisible] = useState(false)
  const [msg, setMsg] = useState(message)
  const [msgId, setMsgId] = useState(messageId)
  const routes = [
    //TODO настроить нормальный роутинг
    {
      path: '/',
      breadcrumbName: 'Домашняя',
    },
    {
      path: 'support',
      breadcrumbName: 'Заявки',
    },
    {
      path: `messages/${msgId}`,
      breadcrumbName: `${msg.subject} [№${msgId}]`,
    },
  ]
  console.log('message from redux', message)
  console.log('message from useState', msg)
  useEffect(() => {
    dispatch(getMessage(msgId))
  }, [])
  useEffect(() => {
    setMsg(message)
  }, [message])



  function itemRender(route, params, routes, paths) {
    console.log('paths:',paths)
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }
  const handleMenuClick = e => {
    console.log('click', e)
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="2">Не выполнена и закрата</Menu.Item>
      <Menu.Item key="3">Приостановлено</Menu.Item>
      <Menu.Item key="4">Открыта</Menu.Item>
    </Menu>
  )
  return (
    <>
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
        ghost={false}
        onBack={() => window.history.back()}
        title={msg.subject}
        subTitle={userID}
        extra={[
          <Dropdown.Button overlay={menu} onClick={handleMenuClick} key="1">
            Выполнена и закрыта
          </Dropdown.Button>,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 8, offset: 0 }}>
            <MessageInformation {...msg}/>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 16, offset: 0 }}>
            <Chat msg={msg} userId={userID} message={msg.message} replies={msg.msgs_reply} />
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Message
