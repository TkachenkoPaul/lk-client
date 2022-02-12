import InfoBox from './InfoBox'
import React from 'react'
import styles from './InfoBoxes.module.scss'
import { Card, Col, Row, Statistic } from 'antd'
import Icon from '@ant-design/icons'
import { ReactComponent as Ruble } from '../../../assets/svg/ruble-sign-solid.svg'
import { ReactComponent as Calendar } from '../../../assets/svg/calendar-days-solid.svg'
import { ReactComponent as Clock } from '../../../assets/svg/clock-rotate-left-solid.svg'

const InfoBoxes = ({ type, deposit, paidDays, paidTo, fee, loading }) => {
  const renderInfoBoxes = type => {
    switch (type) {
      case 0:
        return (
          <div className="row">
            <InfoBox
              iconBg={`bg-gradient-primary`}
              iconStyle={'fas fa-ruble-sign'}
              lg="3"
              md="6"
              xs="12"
              name="Баланс"
              value={deposit}
              measurement="руб."
            />
            <InfoBox
              iconBg={'bg-gradient-primary'}
              iconStyle={'fas fa-calendar-check'}
              sm="6"
              md="6"
              xs="12"
              name="Оплачено"
              value={paidDays}
              measurement=" дней"
            />
            <div className="clearfix hidden-md-up">{''}</div>
            <InfoBox
              iconBg={'bg-gradient-primary'}
              iconStyle={'fas fa-clock'}
              sm="6"
              md="6"
              xs="12"
              name="Снятие"
              value={fee}
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
        )
      case 1:
        return (
          <div className="row">
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
        )
      case 2:
        return (
          <Row gutter={[16, 16]} style={{ marginBottom: '' }}>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card hoverable>
                <Statistic
                  loading={loading}
                  title="Баланс, р."
                  value={deposit}
                  precision={2}
                  valueStyle={{ color: 'rgba(0, 0, 0, 0.85)' }}
                  prefix={
                    <Icon component={Ruble} style={{ fontSize: '16px' }} />
                  }
                  suffix=""
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card hoverable>
                <Statistic
                  loading={loading}
                  title="Оплачено д."
                  value={paidDays}
                  precision={0}
                  valueStyle={{ color: 'rgba(0, 0, 0, 0.85)' }}
                  prefix={
                    <Icon component={Calendar} style={{ fontSize: '16px' }} />
                  }
                  suffix=""
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card hoverable>
                <Statistic
                  loading={loading}
                  title="Завершиться"
                  value={paidTo}
                  precision={0}
                  valueStyle={{ color: 'rgba(0, 0, 0, 0.85)' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6} lg={6} xl={6}>
              <Card hoverable>
                <Statistic
                  loading={loading}
                  title="Снятие,р."
                  value={fee}
                  precision={2}
                  valueStyle={{ color: 'rgba(0, 0, 0, 0.85)' }}
                  prefix={
                    <Icon component={Clock} style={{ fontSize: '16px' }} />
                  }
                  suffix=""
                />
              </Card>
            </Col>
          </Row>
        )
      default:
        return (
          <div className="row">
            <InfoBox
              iconBg={`bg-gradient-primary`}
              iconStyle={'fas fa-ruble-sign'}
              lg="3"
              md="6"
              xs="12"
              name="Баланс"
              value={deposit}
              measurement="руб."
            />
            <InfoBox
              iconBg={'bg-gradient-primary'}
              iconStyle={'fas fa-calendar-check'}
              sm="6"
              md="6"
              xs="12"
              name="Оплачено"
              value={paidDays}
              measurement=" дней"
            />
            <div className="clearfix hidden-md-up">{''}</div>
            <InfoBox
              iconBg={'bg-gradient-primary'}
              iconStyle={'fas fa-clock'}
              sm="6"
              md="6"
              xs="12"
              name="Снятие"
              value={fee}
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
        )
    }
  }

  return <>{renderInfoBoxes(type)}</>
}
export default InfoBoxes
