import InfoBox from './InfoBox'
import React from 'react'

const InfoBoxes = props => {
  return (
    <>
      <div className="row">
        <InfoBox
          iconBg={'bg-success'}
          iconStyle={'fas fa-ruble-sign'}
          sm="6"
          md="3"
          xs="12"
          name="Баланс"
          value="1200"
          measurement="руб."
        />
        <InfoBox
          iconBg={'bg-warning'}
          iconStyle={'fas fa-calendar-check'}
          sm="6"
          md="3"
          xs="12"
          name="Оплачено дней"
          value="35"
          measurement=""
        />
        <div className="clearfix hidden-md-up"></div>
        <InfoBox
          iconBg={'bg-info'}
          iconStyle={'fas fa-clock'}
          sm="6"
          md="3"
          xs="12"
          name="Суточный платеж"
          value="12.5"
          measurement="руб."
        />
        <InfoBox
          iconBg={'bg-primary'}
          iconStyle={'fas fa-money-check'}
          sm="6"
          md="3"
          xs="12"
          name="Интернет-Банк"
          value=""
          measurement=""
          link="https://bank24.gosbank.su/rich/auth"
        />
      </div>
      <div className="row">
        <InfoBox
          iconBg={'bg-success'}
          iconStyle={'fas fa-ruble-sign'}
          sm="6"
          md="3"
          xs="12"
          name="Баланс"
          value="1200"
          measurement="руб."
        />
        <InfoBox
          iconBg={'bg-warning'}
          iconStyle={'fas fa-calendar-check'}
          sm="6"
          md="3"
          xs="12"
          name="Оплачено"
          value="35"
          measurement=" дней"
        />
        <div className="clearfix hidden-md-up"></div>
        <InfoBox
          iconBg={'bg-info'}
          iconStyle={'fas fa-clock'}
          sm="6"
          md="3"
          xs="12"
          name="Снятие"
          value="112.5"
          measurement="руб."
        />
        <InfoBox
          iconBg={'bg-primary'}
          iconStyle={'fas fa-money-check'}
          sm="6"
          md="3"
          xs="12"
          name="Интернет-Банк"
          value=""
          measurement=""
          link="https://bank24.gosbank.su/rich/auth"
        />
      </div>
    </>
  )
}
export default InfoBoxes
