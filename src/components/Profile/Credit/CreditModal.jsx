import { Button, Checkbox, Modal, Typography, notification } from 'antd'
import React, { useState } from 'react'

import { setCredit } from '../../../store/actionCreators/ProfileActionCreator'
import { setCreditError } from '../../../store/slices/profileSlice'
import { useDispatch } from 'react-redux'
import { v4 as uuid } from 'uuid'

const CreditModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  deposit,
  fee,
  paidTo,
  creditError,
}) => {
  const dispatch = useDispatch()
  const [checkBox, setCheckBox] = useState(false)

  const openNotificationCredit = (title, message) => {
    notification.warning({
      key: uuid(),
      message: title,
      description: message,
    })
  }
  const closeCreditErrorHandler = () => {
    dispatch(setCreditError({ data: { errors: { credit: null } } }))
  }
  const openNotificationCreditError = (title, message) => {
    notification.warning({
      key: uuid(),
      message: title,
      description: message,
      onClose: closeCreditErrorHandler,
    })
  }
  if (creditError) {
    openNotificationCreditError('Завершение операции', creditError)
  }
  const modalBody = () => {
    if (deposit < fee) {
      return (
        <>
          <Typography.Paragraph>
            <Typography.Text>
              <ul>
                <li>Вы можете получить кредит 3 раза за 30 дней;</li>
                <li>
                  между кредитами должен быть положительный баланс на вашем
                  счету;
                </li>
                <li>
                  стоимость кредита соответствует суточному платежу, согласно
                  вашему тарифу;
                </li>
                <li>кредит выдается до 24:00 текущего календарного дня;</li>
              </ul>
            </Typography.Text>
          </Typography.Paragraph>
          <Checkbox
            checked={checkBox}
            onChange={() => setCheckBox(prevState => !prevState)}>
            Принимаю условия
          </Checkbox>
        </>
      )
    }
    return (
      <div>
        <h5>Услуга кредит невозможна!</h5>
        <p>
          У вас на счету {deposit} рублей. Дата окончания тарифа {paidTo}
        </p>
      </div>
    )
  }
  const handleSubmit = () => {
    if (checkBox) {
      dispatch(setCredit())
    } else {
      openNotificationCredit(
        'Отказано',
        'Вы не приняли условия предоставления услуги'
      )
    }
    handleCancel()
    setCheckBox(false)
  }
  const handleClose = () => {
    handleCancel()
    setCheckBox(false)
  }
  return (
    <>
      <Modal
        title="Условия предоставления кредита"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleClose}
        footer={[
          <Button onClick={handleClose} key={uuid()}>
            Закрыть
          </Button>,
          <Button type={'primary'} onClick={handleSubmit} key={uuid()}>
            Получить
          </Button>,
        ]}>
        {modalBody()}
      </Modal>
    </>
  )
}

export default CreditModal
