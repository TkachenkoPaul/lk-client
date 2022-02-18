import { Alert, Typography } from 'antd'

import React from 'react'

const FinanceDebtorAlert = ({ deposit, fee, showCreditModal }) => {
  if (deposit < fee) {
    return (
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
              <Typography.Link href="https://bank24.gosbank.su" target="_blank">
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
      />
    )
  } else {
    return <></>
  }
}

export default FinanceDebtorAlert
