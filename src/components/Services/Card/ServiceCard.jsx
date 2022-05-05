import './ServiceCard.scss'

import {
  Badge,
  Button,
  Card,
  Col,
  Modal,
  Space,
  Typography,
  message,
} from 'antd'
import React, { useEffect, useState } from 'react'

import { setMessage } from '../../../store/actionCreators/SupportActionCreator'
import { useDispatch } from 'react-redux'

const ServiceCard = props => {
  const { Text } = Typography
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [visible, setVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = e => {
    e.preventDefault()
    e.stopPropagation()
    setConfirmLoading(true)
    dispatch(
      setMessage({
        message: `Подключение услуги  ${props.name} из личного кабинета абонента.`,
        subject: `Подключение услуги ${props.name}`,
      })
    )
    setTimeout(() => {
      setIsModalVisible(false)
      setConfirmLoading(false)
      message.success({
        content: `Подключение услуги ${props.name} принято в обработку`,
        style: {
          marginTop: '6vh',
        },
      })
    }, 2000)
  }

  const handleCancel = e => {
    e.preventDefault()
    e.stopPropagation()
    setIsModalVisible(false)
  }
  return (
    <Col
      xs={{ span: 24, order: 1 }}
      md={{ span: 8, order: 1 }}
      lg={{ span: 8, order: 1 }}
      xl={{ span: 6, order: 1 }}>
      <Badge.Ribbon color={'red'} text={`${props.price} руб.`}>
        <Card
          onClick={showModal}
          hoverable
          cover={<img alt="card banner" src={props.img} />}
          actions={[
            <Button
              onClick={showModal}
              style={{ width: 150 }}
              size={'middle'}
              type={'primary'}
              shape={'round'}>
              Заказать
            </Button>,
          ]}>
          {props.desc ? (
            // services
            <>
              <Card.Meta
                title={
                  <Typography.Title level={4}>{props.name}</Typography.Title>
                }
                description={
                  <Space direction="vertical" size="small">
                    {props.speed ? (
                      <>
                        <Text>
                          Скорость до <Text strong>{props.speed}</Text> МБит/c
                        </Text>
                      </>
                    ) : (
                      ''
                    )}
                  </Space>
                }
              />
              <Modal
                visible={isModalVisible}
                title={`Тарифный план ${props.name}`}
                okText={'Заказать'}
                cancelText={'Закрыть'}
                onCancel={handleCancel}
                onOk={handleOk}>
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
              </Modal>
            </>
          ) : (
            // tariffs
            <>
              <Card.Meta
                title={
                  <Typography.Title level={4}>{props.name}</Typography.Title>
                }
                description={
                  <Space direction="vertical" size="small">
                    {props.speed ? (
                      <>
                        <Text>
                          Скорость до <Text strong>{props.speed}</Text> МБит/c
                        </Text>
                      </>
                    ) : (
                      ''
                    )}
                  </Space>
                }
              />
              <Modal
                visible={isModalVisible}
                title={`Тарифный план ${props.name}`}
                okText={'Заказать'}
                cancelText={'Закрыть'}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                onOk={handleOk}>
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
              </Modal>
            </>
          )}
        </Card>
      </Badge.Ribbon>
    </Col>
  )
}

export default ServiceCard
