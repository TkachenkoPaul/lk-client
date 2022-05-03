import './ServiceCard.scss'

import { Badge, Button, Card, Col, Modal, Space, Typography } from 'antd'
import React, { useState } from 'react'

import { setMessage } from '../../../store/actionCreators/SupportActionCreator'
import { useDispatch } from 'react-redux'

const ServiceCard = props => {
  const { Text } = Typography
  const dispatch = useDispatch()
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)

  const onCardClick = () => {
    setIsModalVisible(true)
  }
  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    dispatch(
      setMessage({
        message: `Подключение услуги  ${props.name} из личного кабинета абонента.`,
        subject: `Подключение услуги ${props.name}`,
      })
    )
    setIsModalVisible(false)
  }

  const handleCancel = () => {
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
          onClick={onCardClick}
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
          <Card.Meta
            title={<Typography.Title level={4}>{props.name}</Typography.Title>}
            description={
              <Space direction="vertical" size="small">
                {/* <Typography.Title level={5}>
                  {props.price} руб./ 30 дней
                </Typography.Title>
                <Text>
                  <Text strong>{props.price / 30}</Text> руб./день
                </Text> */}
                {props.speed ? (
                  <>
                    <Text>
                      Скорость до <Text strong>{props.speed}</Text> МБит/c
                    </Text>
                    {/* <Text type={'secondary'}>
                      Без ограничений по объему трафика
                    </Text> */}
                    {/* <Text type={'secondary'}>
                      IP-TV - бесплатно, от 156 каналов
                    </Text> */}
                  </>
                ) : (
                  ''
                )}
                {/* <Text type={'secondary'}>Посуточная тарификация</Text>
                <Text type={'secondary'}>Бесплатное подключение</Text> */}
              </Space>
            }
          />
        </Card>
      </Badge.Ribbon>

      <Modal
        visible={isModalVisible}
        title={`Тарифный план ${props.name}`}
        okText={'Заказать'}
        cancelText={'Закрыть'}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
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
              <Text type={'secondary'}>Без ограничений по объему трафика</Text>
              <Text type={'secondary'}>IP-TV - бесплатно, от 156 каналов</Text>
            </>
          ) : (
            ''
          )}
          <Text type={'secondary'}>Посуточная тарификация</Text>
          <Text type={'secondary'}>Бесплатное подключение</Text>
        </Space>
      </Modal>
    </Col>
  )
}

export default ServiceCard
