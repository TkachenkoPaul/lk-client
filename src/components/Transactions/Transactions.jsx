import React, { useEffect, useState } from 'react'
import { Breadcrumb, Col, Divider, PageHeader, Row, Table } from 'antd'
import { Link } from 'react-router-dom'
import { useID } from '../../hooks/useID'
import { useDispatch, useSelector } from 'react-redux'
import { getPayments } from '../../store/actionCreators/PaymentsActionCreator'

const Transactions = () => {
  const userID = useID()
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
        title="Финансы"
        subTitle={userID}
        extra={[]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Payments />
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <div className="mb-4">
              <Fees />
            </div>
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}

const Payments = () => {
  const dispatch = useDispatch()
  const paymentsPage = useSelector(state => state.payments)
  const [payments, setPayments] = useState(paymentsPage.data)
  const [isLoading, setIsLoading] = useState(paymentsPage.isLoading)
  useEffect(() => {
    dispatch(getPayments())
  }, [])
  useEffect(() => {
    setPayments(paymentsPage.data)
  }, [paymentsPage.data])
  useEffect(() => {
    setIsLoading(paymentsPage.isLoading)
  }, [paymentsPage.isLoading])

  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Сумма, руб.', dataIndex: 'amount', key: 'amount' },
    { title: 'Депозит, руб.', dataIndex: 'last_deposit', key: 'dep' },
    { title: 'Вид оплаты', dataIndex: 'method', key: 'method' },
  ]
  return (
    <>
      <Divider orientation="left">Последняя оплата</Divider>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={payments ? payments : null}
        pagination={false}
      />
    </>
  )
}

const Fees = props => {
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
  return (
    <>
      <Divider orientation="left">Снятия</Divider>
      <Table
        loading={props.isLoading}
        hasData={!!props.data}
        columns={columns}
        dataSource={props.data ? props.data : null}
      />
    </>
  )
}

export default Transactions
