import { Breadcrumb, Col, PageHeader, Row } from 'antd'

import Fees from './Fees'
import { Link } from 'react-router-dom'
import Payments from './Payments'
import React from 'react'

const Transactions = ({ login }) => {
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
  function itemRender(route, params, routes, paths) {
    console.log('route:', route)
    console.log('params:', params)
    console.log('routes:', routes)
    console.log('paths:', paths)
    const last = routes.indexOf(route) === routes.length - 1
    console.log('last:', last)
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={route.path} key={paths}>
        {route.breadcrumbName}
      </Link>
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
        subTitle={login}
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

export default Transactions
