import React from 'react'
import styles from './Profile.module.scss'
import { Descriptions, Typography } from 'antd'

const PersonalInformation = props => {
  return (
    <Descriptions
      layout=""
      // size="middle"
      title={
        <h6 className={`${styles.divider} ${styles.gradient}`}>
          Личная информация
        </h6>
      }
      bordered
      column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
      key={1}>
      <Descriptions.Item label="ФИО" key={2}>
        {props.fio}
      </Descriptions.Item>
      <Descriptions.Item label="Логин" key={3}>
        {props.login}
      </Descriptions.Item>
      <Descriptions.Item
        label="Л/С"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={4}>
        <Typography.Paragraph
          copyable={{
            tooltips: [
              'Нажмите, чтобы скопировать текст в буфер обмена',
              'Успешно скопировано',
            ],
          }}>
          {props.uid}
        </Typography.Paragraph>
      </Descriptions.Item>
      <Descriptions.Item label="Улица" key={5}>
        {props.address.street}
      </Descriptions.Item>
      <Descriptions.Item label="Дом" key={6}>
        {props.address.build}
      </Descriptions.Item>
      <Descriptions.Item label="Кваритра" key={7}>
        {props.address.flat}
      </Descriptions.Item>
      <Descriptions.Item
        label="Телефон"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={11}>
        {props.personalPhone === '0' ? '' : props.personalPhone}
      </Descriptions.Item>
      <Descriptions.Item
        label="№ договра"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={13}>
        {props.contract === '0' ? '' : props.contract}
      </Descriptions.Item>
      <Descriptions.Item
        label="Дата регистрации"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={15}>
        {props.registration === '0' ? '' : props.registration}
      </Descriptions.Item>
      <Descriptions.Item
        label="Дата активации"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={16}>
        {props.activation === '0' ? '' : props.activation}
      </Descriptions.Item>
    </Descriptions>
  )
}

export default PersonalInformation
