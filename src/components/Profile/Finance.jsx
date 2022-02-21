import { Descriptions, Tag } from 'antd'
import React, { useEffect } from 'react'

import CreditModal from './Credit/CreditModal'
import FinanceDebtorAlert from './FinanceDebtorAlert'
import styles from './Profile.module.scss'
import { v4 as uuid } from 'uuid'

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
  creditError,
}) => {
  useEffect(() => {
    if (deposit < fee && !modalDisabled) {
      showCreditModal()
    }
  }, [deposit, fee, modalDisabled, showCreditModal])

  return (
    <>
      {/* отображение окна напоминания оплаты */}
      <FinanceDebtorAlert
        fee={fee}
        deposit={deposit}
        showCreditModal={showCreditModal}
      />
      {/* модальное окно для получение кредита */}
      <CreditModal
        isModalVisible={isCreditModalVisible}
        handleCancel={handleCreditModalCancel}
        handleOk={handleCreditModalOk}
        deposit={deposit}
        fee={fee}
        paidTo={paidTo}
        creditError={creditError}
      />
      <Descriptions
        title={
          <h6 className={`${styles.divider} ${styles.gradient}`}>Финансы</h6>
        }
        bordered
        column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
        <Descriptions.Item label="Баланс руб." key={uuid()}>
          <div style={{ fontSize: '16px' }}>
            {deposit >= 0 ? (
              Number(deposit).toFixed(2)
            ) : (
              <Tag color="error" style={{ fontSize: '16px', padding: '10px' }}>
                {Number(deposit).toFixed(2)}
              </Tag>
            )}
          </div>
        </Descriptions.Item>
        <Descriptions.Item label="Оплачено дней" key={uuid()}>
          {paidDays}
        </Descriptions.Item>
        <Descriptions.Item label="Тарифный пакет" key={uuid()}>
          <div style={{ fontSize: '15px' }}>{tariffName}</div>
        </Descriptions.Item>
        <Descriptions.Item label="Дата окончания тарифа" key={uuid()}>
          {paidTo}
        </Descriptions.Item>
        <Descriptions.Item label="Статус тарифного плана" key={uuid()}>
          {tariffState}
        </Descriptions.Item>
        <Descriptions.Item label="К оплате, руб./сутки" key={uuid()}>
          <div style={{ fontSize: '15px' }}>{fee} руб.</div>
        </Descriptions.Item>
        <Descriptions.Item label="Оплата за тарифный пакет, руб./сутки" key={6}>
          {tariffInfo}
        </Descriptions.Item>
      </Descriptions>
    </>
  )
}
