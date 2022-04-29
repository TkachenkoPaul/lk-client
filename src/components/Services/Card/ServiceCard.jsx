import './ServiceCard.scss'

import { Button, Card, Col, Space, Typography } from 'antd';

import React from 'react'
import style from './Card.css'

const ServiceCard = (props) => {
  const { Text } = Typography
          const x = true;
  return <Col xs={{ span: 24, order: 1 }}
                          md={{ span: 8, order: 1 }}
                          lg={{ span: 8, order: 1 }}>
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                            }
                            actions={[
                              <Button
                                style={{ width: 200 }}
                                size={'large'}
                                danger
                                type={'primary'}
                                shape={'round'}>
                                Заказать
                              </Button>,
                            ]}>
                            <Card.Meta
                              title={
                                <Typography.Title level={3}>
                                  Интернет 100
                                </Typography.Title>
                              }
                              description={
                                <Space direction="vertical" size="middle">
                                  <Typography.Title level={4}>
                                    330 руб./ 30 дней
                                  </Typography.Title>
                                  <Text strong>Скорость до 100 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              }
                            />
                          </Card>
                        </Col>
}

export default ServiceCard
