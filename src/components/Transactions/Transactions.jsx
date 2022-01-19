import React, { useState } from 'react'
import { Breadcrumb, Button, Col, Divider, PageHeader, Row, Table } from 'antd'
import { Link } from 'react-router-dom'

const Transactions = () => {
  const routes = [
    {
      path: '',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/transactions',
      breadcrumbName: 'Денежные операции',
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

  const data = [
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      id: 2,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 3,
      id: 3,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 4,
      id: 4,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      id: 2,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 3,
      id: 3,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 4,
      id: 4,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      id: 2,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 3,
      id: 3,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 4,
      id: 4,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 2,
      id: 2,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 3,
      id: 3,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 4,
      id: 4,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 5,
      id: 5,
      date: '2021-09-12 10:43:01',
      sum: 275.5,
      dep: -34,
      actionDescription: '163873466',
      type: 'Банк ЛНР',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
  ]

  const dataFees = [
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 12,
      dep: -34,
      actionDescription: 'Периодические платежи: (4) Аренда ip-адреса',
      type: 'Одноразово',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 12,
      dep: -34,
      actionDescription: 'Периодические платежи: (4) Аренда ip-адреса',
      type: 'Одноразово',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 12,
      dep: -34,
      actionDescription: 'Периодические платежи: (4) Аренда ip-адреса',
      type: 'Одноразово',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 12,
      dep: -34,
      actionDescription: 'Периодические платежи: (4) Аренда ip-адреса',
      type: 'Одноразово',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
    {
      key: 1,
      id: 1,
      date: '2021-09-12 10:43:01',
      sum: 12,
      dep: -34,
      actionDescription: 'Периодические платежи: (4) Аренда ip-адреса',
      type: 'Одноразово',
      description:
        'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
    },
  ]
  let pagination = {
    responsive: true,
    showLessItems: true,
    size: 'default',
    position: ['topRight', 'bottomRight'],
    total: data.length,
    showTotal: (total, range) =>
      `${range[0]}-${range[1]} из ${total} записей`,
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '15', '20', '25', '30'],
  }
  let paginationFees = {
    responsive: true,
    showLessItems: true,
    size: 'default',
    position: ['topRight', 'bottomRight'],
    total: dataFees.length,
    showTotal: (total, range) =>
      `${range[0]}-${range[1]} из ${total} записей`,
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '15', '20', '25', '30'],
  }

  const [loading, setLoading] = useState(false)
  const [hasData, setHasData] = useState(false)
  return (
    <>
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
        ghost={false}
        onBack={() => window.history.back()}
        title="Финансы"
        subTitle="erem-7-001"
        extra={[]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Payments/>

          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <div className="mb-4">
              <Fees/>
            </div>
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}

const Payments = (props) => {
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Сумма', dataIndex: 'sum', key: 'sum' },
    { title: 'Депозит', dataIndex: 'dep', key: 'dep' },
    {
      title: 'Описание',
      dataIndex: 'actionDescription',
      key: 'actionDescription',
      responsive: ['md'],
    },
    { title: 'Вид оплаты', dataIndex: 'type', key: 'type' },
  ]
  return <>
    <Divider orientation="left">Оплаты</Divider>
    <Table
      loading={props.isLoading}
      columns={columns}
      dataSource={props.data ? props.data : null}

    />
  </>
}

const Fees = (props) => {
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Сумма', dataIndex: 'sum', key: 'sum' },
    { title: 'Депозит', dataIndex: 'dep', key: 'dep', responsive: ['md'] },
    {
      title: 'Описание',
      dataIndex: 'actionDescription',
      key: 'actionDescription',
    },
    {
      title: 'Вид операции',
      dataIndex: 'type',
      key: 'type',
      responsive: ['md'],
    },
  ]
  return <>
    <Divider orientation="left">Снятия</Divider>
    <Table
      loading={props.isLoading}
      hasData={!!props.data}
      columns={columns}
      dataSource={props.data ? props.data : null}
    />
  </>
}

export default Transactions
