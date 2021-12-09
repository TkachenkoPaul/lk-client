import React from 'react'
import { Button, Col, Divider, PageHeader, Row, Space, Table } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const Support = () => {
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
          <Button onClick={() => alert(record.id)} type="primary">
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
  ]
  return (
    <>
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={{ routes }}
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
                // itemRender: itemRender,
                position: ['topRight', 'bottomRight'],
                total: data.length,
                showTotal: (total, range) =>
                  `${range[0]}-${range[1]} из ${total} записей`,
                defaultPageSize: 5,
                showSizeChanger: true,
                pageSizeOptions: ['1', '2', '3', '4', '5'],
              }}
            />
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Support
