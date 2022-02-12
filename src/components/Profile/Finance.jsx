import React from 'react'
import { Alert, Descriptions, Tag, Typography } from 'antd'
import styles from './Profile.module.scss'

export const Finance = ({
  deposit,
  tariffName,
  tariffState,
  tariffInfo,
  paidDays,
  paidTo,
  fee,
}) => {
  return (
    <>
      {deposit < fee && (
        <Alert
          showIcon
          closable
          type="error"
          message="Внимание!"
          description={
            <Typography.Text type={'danger'}>
              У вас не достаточно средств на счету. Для возобновления
              пользования услугой интернет нужно внести денежные средства на
              лицевой счет, который указан в вашем договоре.{' '}
              <Typography.Link href="https://bank24.gosbank.su" target="_blank">
                Интернет-Банк
              </Typography.Link>
            </Typography.Text>
          }
          // description="У вас не достаточно средств на счету. Для возобновления пользования услугой интернет нужно внести денежные средства на лицевой счет, который указан в вашем договоре."
          // <Marquee
          //   style={{ zIndex: 1 }}
          //   gradient={false}
          //   pauseOnHover={true}
          //   speed={'25'}
          //   gradientColor={[229, 57, 53]}
          //   direction={'left'}>
          //   <Typography.Title level={5} type={'danger'}>
          //     У вас не достаточно средств на счету. Для возобновления
          //     пользования услугой интернет нужно внести денежные средства на
          //     лицевой счет, который указан в вашем договоре.
          //   </Typography.Title>
          // </Marquee>
        />
      )}
      <Descriptions
        title={
          <h6 className={`${styles.divider} ${styles.gradient}`}>Финансы</h6>
        }
        bordered
        column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
        <Descriptions.Item label="Баланс руб." key={1}>
          <div style={{ fontSize: '16px' }}>
            {deposit >= 0 ? (
              deposit
            ) : (
              <Tag color="error" style={{ fontSize: '16px', padding: '10px' }}>
                {deposit}
              </Tag>
            )}
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="Тарифный пакет" key={2}>
          <div style={{ fontSize: '15px' }}>{tariffName}</div>
        </Descriptions.Item>
        <Descriptions.Item label="Статус тарифного плана" key={3}>
          {tariffState}
        </Descriptions.Item>
        <Descriptions.Item label="Оплачено дней" key={4}>
          {paidDays}
        </Descriptions.Item>
        <Descriptions.Item label="Дата окончания тарифа" key={5}>
          {paidTo}
        </Descriptions.Item>

        <Descriptions.Item label="Оплата за тарифный пакет, руб./сутки" key={6}>
          {tariffInfo}
        </Descriptions.Item>
        <Descriptions.Item label="К оплате, руб./сутки" key={7}>
          <div style={{ fontSize: '15px' }}>{fee} руб.</div>
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}
