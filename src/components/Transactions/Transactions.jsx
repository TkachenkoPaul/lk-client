import React from 'react'
import {
  Breadcrumb,
  Col,
  PageHeader,
  Row,
} from 'antd'
import { Link } from 'react-router-dom'
import { useID } from '../../hooks/useID'
import Payments from './Payments'
import Fees from './Fees'

//TODO need to replace moment.js
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


export default Transactions
