import {
  Breadcrumb,
  Button,
  Col,
  Divider,
  PageHeader,
  Row,
  Space,
  Table,
} from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import {
  getMessages,
  setMessage,
} from '../../store/actionCreators/SupportActionCreator'
import { useDispatch, useSelector } from 'react-redux'

import { AddMessageFormCollection } from './AddMessageFromCollection'
import { PlusOutlined } from '@ant-design/icons'
import moment from 'moment'
import { useID } from '../../hooks/useID'

const Support = () => {
  //TODO индикация загрузки данных в таблице
  //TODO индикация загрузки заявки со скелетоном
  const userID = useID()
  const support = useSelector(state => state.support)
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [modalText, setModalText] = useState('Content of the modal')
  const [isLoading, setIsLoading] = useState(support.isLoading)
  const [messages, setMessages] = useState(support.messages)
  useEffect(() => {
    dispatch(getMessages())
  }, [])
  useEffect(() => {
    setIsLoading(support.isLoading)
  }, [support.isLoading])
  useEffect(() => {
    setMessages(support.messages)
  }, [support.messages])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/support',
      breadcrumbName: 'Заявки',
    },
  ]
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={route.path}>{route.breadcrumbName}</Link>
    )
  }
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Тема', dataIndex: 'subject', key: 'subject' },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      defaultSortOrder: 'descend',
      sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
    },
    {
      title: 'Состояние',
      dataIndex: 'state',
      key: 'state',
      responsive: ['md'],
    },
    {
      title: '',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => navigate('message/' + record.id)}
            type="primary">
            Просмотр
          </Button>
        </Space>
      ),
    },
  ]

  const showModal = () => {
    setVisible(true)
  }
  const hideModal = () => {
    setVisible(false)
  }
  const onCreate = values => {
    console.log('Received values of form: ', values)
    dispatch(setMessage(values))
    setVisible(false)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }

  return (
    <>
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
        ghost={false}
        onBack={() => window.history.back()}
        title="Заявки"
        subTitle={userID}
        extra={[
          <Button
            key="1"
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            onClick={showModal}>
            Создать заявку
          </Button>,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Divider orientation="left">История заявок</Divider>
            <AddMessageFormCollection
              confirmLoading={support.newMessage.isLoading}
              visible={visible}
              onCancel={hideModal}
              onCreate={onCreate}
            />
            <Table
              loading={isLoading}
              columns={columns}
              dataSource={messages}
              // pagination={{
              //   responsive: true,
              //   showLessItems: true,
              //   size: 'default',
              //   position: ['topRight', 'bottomRight'],
              //   total: messagesData?.length && 0,
              //   showTotal: (total, range) =>
              //     `${range[0]}-${range[1]} из ${total} записей`,
              //   defaultPageSize: 10,
              //   showSizeChanger: true,
              //   pageSizeOptions: ['5', '10', '15', '20', '25'],
              // }}
            />
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Support
