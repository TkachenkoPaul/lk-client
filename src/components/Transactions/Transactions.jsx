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
  Table,
} from 'antd'

const Transactions = () => {
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
  const columnsFees = [
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
  const state = {
    loading: false,
    size: 'default',
    expandable: true,
    title: undefined,
    scroll: undefined,
    hasData: false,
    tableLayout: undefined,
    top: 'topRight',
    bottom: 'bottomRight',
  }
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
        title="Финансы"
        subTitle="erem-7-001"
        extra={[]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Divider orientation="left">Оплаты</Divider>
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
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <div className="mb-4">
              <Divider orientation="left">Снятия</Divider>
              <Table
                loading={loading}
                hasData={hasData}
                columns={columnsFees}
                dataSource={!hasData ? dataFees : null}
                // dataSource={dataFees}
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
              <div className="m-4 p-4">
                <div className="mb-2 ">
                  <Button type="primary" onClick={() => setLoading(!loading)}>
                    Загрузка вкл/выкл
                  </Button>
                  <p>
                    демонстрация загрузки данных с сервера. стандартно нет
                    данных
                  </p>
                </div>
                <div className="mb-2">
                  <Button type="primary" onClick={() => setHasData(!hasData)}>
                    Удалить/Добавить данные
                  </Button>
                  <p>демонстрация наличия/ отсутствия даныых для отображения</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Transactions
