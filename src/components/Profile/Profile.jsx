import React from 'react'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import { Button, Col, Descriptions, PageHeader, Row } from 'antd'
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
        subTitle=""
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
            <Descriptions
              size="default"
              title="Личная информация"
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="ФИО">
                Тестеров Тестер Тестерович
              </Descriptions.Item>
              <Descriptions.Item
                label="Л/С"
                contentStyle={{ whiteSpace: 'nowrap' }}>
                902145
              </Descriptions.Item>
              <Descriptions.Item
                label="Основной тел.номер"
                contentStyle={{ whiteSpace: 'nowrap' }}>
                0721044880
              </Descriptions.Item>
              <Descriptions.Item
                label="Доп. тел.номер"
                contentStyle={{ whiteSpace: 'nowrap' }}>
                0664841472
              </Descriptions.Item>
              <Descriptions.Item
                label="№ договра"
                contentStyle={{ whiteSpace: 'nowrap' }}>
                045789
              </Descriptions.Item>
              <Descriptions.Item
                label="Дата заключения"
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
              <Descriptions.Item label="Логин">erem-7-001</Descriptions.Item>
              <Descriptions.Item label="Улица">
                Шевченко Т.Г улица
              </Descriptions.Item>
              <Descriptions.Item label="Дом">4</Descriptions.Item>
              <Descriptions.Item label="Кваритра">124</Descriptions.Item>
            </Descriptions>
          </Col>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            {' '}
            <Descriptions
              size="small"
              title="Финансы"
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Тарифный пакет" span={2}>
                Интернет 100 + IPTV + Кабельное ТВ
              </Descriptions.Item>
              <Descriptions.Item label="Оплачено дней">31</Descriptions.Item>
              <Descriptions.Item label="Дата окончания тарифа">
                2021-12-19
              </Descriptions.Item>
              <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
              <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
              <Descriptions.Item label="Official">$60.00</Descriptions.Item>
              <Descriptions.Item label="Config Info">
                Data disk type: MongoDB
                <br />
                Database version: 3.4
                <br />
                Package: dds.mongo.mid
                <br />
                Storage space: 10 GB
                <br />
                Replication factor: 3
                <br />
                Region: East China 1
              </Descriptions.Item>
            </Descriptions>
          </Col>
        </Row>
        <Descriptions
          size="small"
          title="Личная информация"
          bordered
          column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}>
          <Descriptions.Item label="Product">Cloud Database</Descriptions.Item>
          <Descriptions.Item label="Billing">Prepaid</Descriptions.Item>
          <Descriptions.Item label="time">18:00:00</Descriptions.Item>
          <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
          <Descriptions.Item label="Discount">$20.00</Descriptions.Item>
          <Descriptions.Item label="Official">$60.00</Descriptions.Item>
          <Descriptions.Item label="Config Info">
            Data disk type: MongoDB
            <br />
            Database version: 3.4
            <br />
            Package: dds.mongo.mid
            <br />
            Storage space: 10 GB
            <br />
            Replication factor: 3
            <br />
            Region: East China 1
          </Descriptions.Item>
        </Descriptions>
        <Descriptions size="small" column={3}>
          <Descriptions.Item label="Created">Lili Qu</Descriptions.Item>
          <Descriptions.Item label="Association">
            <a>421421</a>
          </Descriptions.Item>
          <Descriptions.Item label="Creation Time">
            2017-01-10
          </Descriptions.Item>
          <Descriptions.Item label="Effective Time">
            2017-10-10
          </Descriptions.Item>
          <Descriptions.Item label="Remarks">
            Gonghu Road, Xihu District, Hangzhou, Zhejiang, China
          </Descriptions.Item>
        </Descriptions>
        <div>
          Alias autem beatae consequatur culpa cumque dicta distinctio doloribus
          eius enim ex ipsum laborum magni maiores maxime minima nisi officiis
          optio perspiciatis praesentium quae quaerat quis ratione rem, sed
          voluptas!
        </div>

        <div>
          Accusantium alias corporis eaque ipsam, minus neque nulla praesentium
          quod tempora! Aliquam commodi dicta dolores eius error est hic illo
          illum laudantium necessitatibus quasi quod saepe, soluta, ullam vero,
          voluptates.
        </div>
      </PageHeader>
    </>
  )
}
export default Profile
