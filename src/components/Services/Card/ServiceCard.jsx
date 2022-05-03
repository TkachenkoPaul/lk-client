import './ServiceCard.scss'

import { Button, Card, Col, Space, Typography } from 'antd'

import React from 'react'
import style from './Card.css'

const ServiceCard = props => {
  const { Text } = Typography
  return (
    <Col
      xs={{ span: 24, order: 1 }}
      md={{ span: 6, order: 1 }}
      lg={{ span: 6, order: 1 }}>
      <Card
        hoverable
        cover={<img alt="card banner" src={props.img} />}
        actions={[
          <Button
            style={{ width: 150 }}
            size={'middle'}
            primary
            type={'primary'}
            shape={'round'}>
            Заказать
          </Button>,
        ]}>
        <Card.Meta
          title={<Typography.Title level={4}>{props.name}</Typography.Title>}
          description={
            <Space direction="vertical" size="small">
              <Typography.Title level={5}>
                {props.price} руб./ 30 дней
              </Typography.Title>
              <Text>
                <Text strong>{props.price / 30}</Text> руб./день
              </Text>
              {props.speed ? (
                <>
                  <Text>
                    Скорость до <Text strong>{props.speed}</Text> МБит/c
                  </Text>
                  <Text type={'secondary'}>
                    Без ограничений по объему трафика
                  </Text>
                  <Text type={'secondary'}>
                    IP-TV - бесплатно, от 156 каналов
                  </Text>
                </>
              ) : (
                ''
              )}
              <Text type={'secondary'}>Посуточная тарификация</Text>
              <Text type={'secondary'}>Бесплатное подключение</Text>
            </Space>
          }
        />
      </Card>
    </Col>
  )
}

export default ServiceCard
