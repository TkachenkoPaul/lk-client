import React, { useEffect } from 'react'
import { Alert, Descriptions, Tag, Typography } from 'antd'
import styles from './Profile.module.scss'
import CreditModal from './Credit/CreditModal'

export const Finance = ({
  deposit,
  tariffName,
  tariffState,
  tariffInfo,
  paidDays,
  paidTo,
  fee,
  isCreditModalVisible,
  showCreditModal,
  handleCreditModalCancel,
  handleCreditModalOk,
  modalDisabled,
}) => {
  useEffect(() => {
    if (deposit < fee && !modalDisabled) {
      showCreditModal()
    }
  }, [deposit, fee])

  return (
    <>
      {deposit < fee && (
        <Alert
          showIcon
          closable
          type="error"
          message="Внимание!"
          description={
            <Typography.Paragraph type={'danger'}>
              <Typography.Text>
                У вас не достаточно средств на счету. Для возобновления
                пользования услугой интернет нужно внести денежные средства на
                лицевой счет, который указан в вашем договоре.
              </Typography.Text>
              <Typography.Text>
                {' '}
                Вы можете это сделать с помощью{' '}
                <Typography.Link
                  href="https://bank24.gosbank.su"
                  target="_blank">
                  Интернет-Банк
                </Typography.Link>
                .
              </Typography.Text>
              <Typography.Text>
                {' '}
                Или воспользоваться услугой{' '}
                <Typography.Link onClick={showCreditModal}>
                  Кредит
                </Typography.Link>
                .
              </Typography.Text>
            </Typography.Paragraph>
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
      <CreditModal
        isModalVisible={isCreditModalVisible}
        handleCancel={handleCreditModalCancel}
        handleOk={handleCreditModalOk}
        deposit={deposit}
        fee={fee}
        paidTo={paidTo}
      />
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
