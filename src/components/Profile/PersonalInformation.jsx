import React from 'react'
import styles from './Profile.module.scss'
import { Descriptions, Typography } from 'antd'

export const PersonalInformation = ({
  fio,
  login,
  uid,
  address,
  personalPhone,
  contract,
  registration,
  activation,
}) => {
  return (
    <Descriptions
      layout=""
      title={
        <h6 className={`${styles.divider} ${styles.gradient}`}>
          Личная информация
        </h6>
      }
      bordered
      column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}
      key={1}>
      <Descriptions.Item label="ФИО" key={2}>
        {fio}
      </Descriptions.Item>
      <Descriptions.Item label="Логин" key={3}>
        {login}
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
          {uid}
        </Typography.Paragraph>
      </Descriptions.Item>
      <Descriptions.Item label="Улица" key={5}>
        {address.street}
      </Descriptions.Item>
      <Descriptions.Item label="Дом" key={6}>
        {address.build}
      </Descriptions.Item>
      <Descriptions.Item label="Кваритра" key={7}>
        {address.flat}
      </Descriptions.Item>
      <Descriptions.Item
        label="Телефон"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={11}>
        {personalPhone === '0' ? '' : personalPhone}
      </Descriptions.Item>
      <Descriptions.Item
        label="№ договра"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={13}>
        {contract === '0' ? '' : contract}
      </Descriptions.Item>
      <Descriptions.Item
        label="Дата регистрации"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={15}>
        {registration === '0' ? '' : registration}
      </Descriptions.Item>
      <Descriptions.Item
        label="Дата активации"
        contentStyle={{ whiteSpace: 'nowrap' }}
        key={16}>
        {activation === '0' ? '' : activation}
      </Descriptions.Item>
    </Descriptions>
  )
}
