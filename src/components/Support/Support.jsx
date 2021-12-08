import React, { useState } from 'react'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import {
  Button,
  Col,
  Descriptions,
  Divider,
  PageHeader,
  Pagination,
  Row,
  Space,
  Table,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

const Support = () => {
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/transactions',
      breadcrumbName: 'Денежные операции',
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
    { title: '-', dataIndex: 'opt', key: 'opt' },
    {
      title: '-',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Button type="primary">Просмотр {record.id}</Button>
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
  ]
  function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <a>Previous</a>
    }
    if (type === 'next') {
      return <a>Next</a>
    }
    return originalElement
  }

  const [loading, setLoading] = useState(false)
  const [hasData, setHasData] = useState(false)
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
        >
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
                defaultPageSize: 1,
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
