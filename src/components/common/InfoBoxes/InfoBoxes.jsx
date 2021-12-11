import InfoBox from './InfoBox'
import React from 'react'
import styles from './InfoBoxes.module.scss'

const InfoBoxes = props => {
  console.log(styles)
  return (
    <>
      <div className="row">
        <InfoBox
          iconBg={`bg-gradient-primary`}
          iconStyle={'fas fa-ruble-sign'}
          lg="3"
          md="6"
          xs="12"
          name="Баланс"
          value="1200"
          measurement="руб."
        />
        <InfoBox
          iconBg={'bg-gradient-primary'}
          iconStyle={'fas fa-calendar-check'}
          sm="6"
          md="6"
          xs="12"
          name="Оплачено"
          value="35"
          measurement=" дней"
        />
        <div className="clearfix hidden-md-up"></div>
        <InfoBox
          iconBg={'bg-gradient-primary'}
          iconStyle={'fas fa-clock'}
          sm="6"
          md="6"
          xs="12"
          name="Снятие"
          value="112.5"
          measurement="руб."
        />
        <InfoBox
          iconBg={'bg-gradient-primary'}
          iconStyle={'fas fa-money-check'}
          sm="6"
          md="6"
          xs="12"
          name="Интернет-Банк"
          value=""
          measurement=""
          link="https://bank24.gosbank.su/rich/auth"
        />
      </div>

      <div className={`row`}>
        <div className="col-md-6 col-sm-6 col-lg-3 col-12">
          <div
            className={`info-box bg-gradient-primary elevation-3 ${styles.scale}`}>
            <span className="info-box-icon">
              <i className="fas fa-ruble-sign" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Баланс</span>
              <span className="info-box-number">1999.50 руб.</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-3 col-12">
          <div
            className={`info-box bg-gradient-primary elevation-3 ${styles.scale}`}>
            <span className="info-box-icon">
              <i className="far fa-calendar-check" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Оплачено</span>
              <span className="info-box-number">35 дней </span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-3 col-12">
          <div
            className={`info-box bg-gradient-primary elevation-3 ${styles.scale}`}>
            <span className="info-box-icon">
              <i className="fas fa-clock" />
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Снятие</span>
              <span className="info-box-number">22.5 руб.</span>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-3 col-12">
          <a
            href="https://bank24.gosbank.su/rich/auth"
            target="_blank"
            rel="noreferrer"
            className={`${styles.bank}`}>
            <div
              className={`info-box bg-gradient-primary elevation-3 ${styles.scale} `}>
              <span className="info-box-icon">
                <i className="fas fa-money-check" />
              </span>
              <div className="info-box-content ">
                <span className="info-box-text">Оплатить</span>
                <span className="info-box-number">Интернет-Банк</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
export default InfoBoxes
