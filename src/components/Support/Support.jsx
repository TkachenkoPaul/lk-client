import React, { useEffect, useState } from 'react'
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
import { CloudDownloadOutlined, PlusOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setMessages } from '../../store/slices/supportSlice'

const Support = () => {
  const { messages } = useSelector(state => ({
    messages: state.support.messages,
  }))
  const [messagesData, setMessagesData] = useState(messages)
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const dataLoad = () => {
    let newMessages = [
      {
        id: Date.now(),
        key: Date.now(),
        subject: 'Не работает интернет',
        chapter: 'Технические вопросы',
        date: '2021-12-13 12:34:12',
        status: 'Открыта',
      },
      {
        id: Date.now(),
        key: Date.now(),
        subject: 'Не работает КТВ',
        chapter: 'Технические вопросы',
        date: '2021-12-15 11:34:12',
        status: 'Выполнена и закрыта',
      },
    ]
    setMessagesData(oldMessages => [...oldMessages, ...newMessages])
  }
  console.log(messagesData)
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
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Тема', dataIndex: 'subject', key: 'subject' },
    { title: 'Раздел', dataIndex: 'chapter', key: 'chapter' },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    {
      title: 'Состояние',
      dataIndex: 'status',
      key: 'status',
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
  return (
    <>
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
        ghost={false}
        onBack={() => window.history.back()}
        title="Заявки"
        subTitle="erem-7-001"
        extra={[
          <Button key="1" type="primary" icon={<PlusOutlined />} size="large">
            Создать заявку
          </Button>,
          <Button
            key="1"
            type="primary"
            onClick={() => setIsLoading(!isLoading)}
            icon={<CloudDownloadOutlined />}
            size="large">
            Загрузка вкл/выкл
          </Button>,
          <Button
            key="1"
            type="primary"
            onClick={dataLoad}
            icon={<CloudDownloadOutlined />}
            size="large">
            Загрузить
          </Button>,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Divider orientation="left">История заявок</Divider>
            <Table
              loading={isLoading}
              columns={columns}
              dataSource={messagesData}
              pagination={{
                responsive: true,
                showLessItems: true,
                size: 'default',
                position: ['topRight', 'bottomRight'],
                total: messagesData?.length && 0,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} из ${total} записей`,
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ['5', '10', '15', '20', '25'],
              }}
            />
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Support
