import React from 'react'
import { Breadcrumb, Button, Col, Divider, PageHeader, Row, Space, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useNavigate } from 'react-router-dom'



const Support = () => {
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
    const last = routes.indexOf(route) === routes.length - 1;
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    );
  }
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Тема', dataIndex: 'subject', key: 'subject' },
    { title: 'Раздел', dataIndex: 'chapter', key: 'chapter' },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
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
          <Button onClick={() => navigate('message/'+ record.id)} type="primary">
            Просмотр
          </Button>
        </Space>
      ),
    },
  ]
  const data = [
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 2,
      id: 2,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 3,
      id: 3,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 4,
      id: 4,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      state: 'Открыта',
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
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Divider orientation="left">История заявок</Divider>
            <Table
              loading={false}
              columns={columns}
              dataSource={data}
              pagination={{
                responsive: true,
                showLessItems: true,
                size: 'default',
                position: ['topRight', 'bottomRight'],
                total: data.length,
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
