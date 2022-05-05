import { Col, Row, Spin } from 'antd'

import React from 'react'
import style from './Loader.module.css'

const Loader = () => {
  return (
    <Row justify="center" align="middle">
      <Col className={`${style.align}`} style={{ minHeight: '70vh' }}>
        <Spin tip="Загрузка..." size="large" />
      </Col>
    </Row>
  )
}

export default Loader
