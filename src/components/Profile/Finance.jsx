import React from 'react'
import styles from './Profile.module.scss'
import { Descriptions, Tag } from 'antd'

const Finance = props => {
  return (
    <Descriptions
      title={
        <h6 className={`${styles.divider} ${styles.gradient}`}>Финансы</h6>
      }
      bordered
      column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
      <Descriptions.Item label="Баланс руб." key={1}>
        <div style={{ fontSize: '16px' }}>
          {props.deposit >= 0 ? (
            props.deposit
          ) : (
            <Tag color="error" style={{ fontSize: '16px', padding: '10px' }}>
              {props.deposit}
            </Tag>
          )}
        </div>
      </Descriptions.Item>
      <Descriptions.Item label="Тарифный пакет" key={2}>
        <div style={{ fontSize: '15px' }}>{props.taariffName}</div>
      </Descriptions.Item>
      <Descriptions.Item label="Статус тарифного плана" key={3}>
        {props.tariffState}
      </Descriptions.Item>
      <Descriptions.Item label="Оплачено дней" key={4}>
        {props.paidDays}
      </Descriptions.Item>
      <Descriptions.Item label="Дата окончания тарифа" key={5}>
        {props.paidTo}
      </Descriptions.Item>

      <Descriptions.Item label="Оплата за тарифный пакет, руб./сутки" key={6}>
        {props.tariffInfo}
      </Descriptions.Item>
      <Descriptions.Item label="К оплате, руб./сутки" key={7}>
        <div style={{ fontSize: '15px' }}>{props.fee} руб.</div>
      </Descriptions.Item>
    </Descriptions>
  )
}

export default Finance
