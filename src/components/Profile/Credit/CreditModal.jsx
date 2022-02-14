import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'
import { Button, Checkbox, Modal, Typography, notification } from 'antd'
import { useDispatch } from 'react-redux'
import { setCredit } from '../../../store/actionCreators/ProfileActionCreator'

const CreditModal = ({
  isModalVisible,
  handleOk,
  handleCancel,
  deposit,
  fee,
  paidTo,
}) => {
  const dispatch = useDispatch()
  const [checkBox, setCheckBox] = useState(false)
  const opeNotification = () => {
    notification.warning({
      message: 'Отказано',
      description: 'Вы не приняли условия предоставления услуги',
    })
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
      opeNotification()
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
