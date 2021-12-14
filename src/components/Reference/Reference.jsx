import React, { useEffect, useState } from 'react'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import {
  Breadcrumb,
  Button,
  Col, Collapse,
  Descriptions,
  Divider,
  Form,
  Input,
  Modal,
  PageHeader,
  Row,
  Switch,
  Typography,
} from 'antd'
import { Link } from 'react-router-dom'

const Reference = () => {
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/reference',
      breadcrumbName: 'Справка',
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

  return (
    <>
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
        ghost={false}
        onBack={() => window.history.back()}
        title="Справка"
        subTitle="erem-7-001"
        extra={[ ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Divider orientation="left">Договор</Divider>
            <Collapse >
              <Collapse.Panel header="Публичный договор-оферта об оказании телематических услуг связи для физических лиц" key="1">
                <Typography.Link  href="https://rck.su/documents" target="_blank">Перейти</Typography.Link>
              </Collapse.Panel>
              <Collapse.Panel header="Публичный договор-оферта об оказании услуг связи для целей кабельного вещания" key="2">
                <Typography.Link  href="https://rck.su/documents" target="_blank">Перейти</Typography.Link>
              </Collapse.Panel>
            </Collapse>
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}

export default Reference
