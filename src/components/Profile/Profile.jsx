import React from 'react'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import { Button, Col, Descriptions, Divider, PageHeader, Row } from 'antd'

const Profile = () => {
  const routes = [
    {
      path: 'index',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/profile',
      breadcrumbName: 'Профиль',
    },
  ]
  return (
    <>
      <InfoBoxes />
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={{ routes }}
        ghost={false}
        onBack={() => window.history.back()}
        title="Профиль"
        subTitle="erem-7-001"
        extra={[
          <Button key="1" type="primary">
            Действие
          </Button>,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            {' '}
            <Descriptions
              size="small"
              title={<Divider orientation="left">Финансы</Divider>}
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Баланс руб.">
                <div style={{ fontSize: '16px' }}>120</div>
              </Descriptions.Item>
              <Descriptions.Item label="Тарифный пакет" span={2}>
                <div style={{ fontSize: '16px' }}>
                  Интернет 100 + IPTV + Кабельное ТВ
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Оплачено дней">31</Descriptions.Item>
              <Descriptions.Item label="Дата окончания тарифа">
                2021-12-19
              </Descriptions.Item>

              <Descriptions.Item label="Оплата за тарифный пакет, руб./сутки">
                Интернет 100 + IPTV: 11 руб./сутки
                <br />
                Кабельное ТВ: 2.5 руб./сутки
                <br />
                Реальный IP-адрес: 2.8 руб./сутки
              </Descriptions.Item>
              <Descriptions.Item label="К оплате, руб./сутки">
                <div style={{ fontSize: '16px' }}>12.05</div>
              </Descriptions.Item>
            </Descriptions>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <div className="mb-4">
              <Descriptions
                layout="vertical"
                size="middle"
                title={<Divider orientation="left">Личная информация</Divider>}
                bordered
                column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}>
                <Descriptions.Item label="ФИО" span={2}>
                  Тестеров Тестер Тестерович
                </Descriptions.Item>
                <Descriptions.Item label="Логин">erem-7-001</Descriptions.Item>
                <Descriptions.Item
                  label="Л/С"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  span={1}>
                  902145
                </Descriptions.Item>
                <Descriptions.Item label="Улица" span={2}>
                  Шевченко Т.Г улица
                </Descriptions.Item>
                <Descriptions.Item label="Дом">4</Descriptions.Item>
                <Descriptions.Item label="Кваритра">124</Descriptions.Item>
                <Descriptions.Item label="Паспорт выдан" span={2}>
                  Ленинским РО УМВД Украины в Луганской области
                </Descriptions.Item>
                <Descriptions.Item label="№ паспорта">
                  ЕК 141029
                </Descriptions.Item>
                <Descriptions.Item label="Дата выдачи">
                  2021-11-21
                </Descriptions.Item>
                <Descriptions.Item
                  label="Тел. основной"
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  0721044880
                </Descriptions.Item>
                <Descriptions.Item
                  label="Тел. доп."
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  0664841472
                </Descriptions.Item>
                <Descriptions.Item
                  label="№ договра"
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  045789
                </Descriptions.Item>
                <Descriptions.Item
                  label="Договор от"
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  2021-11-21
                </Descriptions.Item>
                <Descriptions.Item
                  label="Дата регистрации"
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  2021-11-19
                </Descriptions.Item>
                <Descriptions.Item
                  label="Дата активации"
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  2021-11-22
                </Descriptions.Item>
              </Descriptions>
            </div>
          </Col>
        </Row>
      </PageHeader>
    </>
  )
}
export default Profile
