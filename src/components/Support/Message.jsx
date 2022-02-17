import { Breadcrumb, Button, Col, PageHeader, Row } from 'antd'
import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Chat from './Chat'
import MessageInformation from './MessageInformation'
import { getMessage } from '../../store/actionCreators/SupportActionCreator'
import { useID } from '../../hooks/useID'
import { v4 as uuid } from 'uuid'

const Message = () => {
  const message = useSelector(state => state.support.message)
  const { messageId } = useParams()
  const [msg, setMsg] = useState(message)
  const [msgId] = useState(messageId)
  const dispatch = useDispatch()
  const userID = useID()

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
  useEffect(() => {
    dispatch(getMessage(msgId))
  }, [])
  useEffect(() => {
    setMsg(message.data)
  }, [message])

  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }

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
          <Button key={uuid()} type={'primary'}>
            Закрыть
          </Button>,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 8, offset: 0 }}>
            <MessageInformation message={msg} />
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 16, offset: 0 }}>
            <Chat
              msg={msg}
              userId={userID}
              message={msg.message}
              replies={msg.msgs_reply}
            />
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Message
