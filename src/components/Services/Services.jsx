import React from 'react'
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Divider,
  Grid,
  Layout,
  PageHeader,
  Row,
  Space,
  Tabs,
  Typography,
} from 'antd'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import './Services.css'
import { Link } from 'react-router-dom'
import ServiceCard from './Card/ServiceCard'

const Services = ({ login }) => {
  const { Text, Paragraph } = Typography
  const { useBreakpoint } = Grid
  const screens = useBreakpoint()
  let size = {}
  console.log(screens)
  for (const screensKey in screens) {
    console.log(screensKey)
    console.log(screens[screensKey])
  }
  console.log('test', screens['xs'])
  if (screens['xs']) {
    size = {
      tariffNameFontSize: 18,
      tariffCostFontSize: 26,
      tariffAdsFontSize: 12,
    }
  } else if (screens['md']) {
    size = {
      tariffNameFontSize: 18,
      tariffCostFontSize: 26,
      tariffAdsFontSize: 12,
    }
  }
  const routes = [
    {
      path: '/',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/services',
      breadcrumbName: 'Услуги',
    },
  ]
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
    adaptiveHeight: true,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  }
  return (
    <>
      <Layout>
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Slider {...sliderSettings}>
              <div style={{ height: 500 }}>
                <img
                  className="img-fluid rounded mx-auto d-block"
                  src="https://via.placeholder.com/1397x350/006262/FFFFFF?text=№1+Рекламный+банер+для+личного+кабинета"
                  alt="slide #1"
                />
              </div>
              <div style={{ height: 500 }}>
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/1397x350/F4CA16/000000?text=№2+Рекламный+банер+для+личного+кабинета"
                  alt="slide #1"
                />
              </div>
              <div style={{ height: 500 }}>
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/1397x350/FF0000/FFFFFF?text=№3+Рекламный+банер+для+личного+кабинета"
                  alt="slide #1"
                />
              </div>
              <div style={{ height: 500 }}>
                <img
                  className="img-fluid"
                  src="https://via.placeholder.com/1397x350/0000FF/FFFFFF?text=№4+Рекламный+банер+для+личного+кабинета"
                  alt="slide #1"
                />
              </div>
            </Slider>
          </Col>
          <Col span={24}>
            <PageHeader
              style={{ height: '100%' }}
              breadcrumb={
                <Breadcrumb itemRender={itemRender} routes={routes} />
              }
              ghost={false}
              onBack={() => window.history.back()}
              title="Заказать услугу"
              subTitle={login}
              extra={[]}>
              <Tabs defaultActiveKey="3">
                <Tabs.TabPane tab="Вариант услуг 1" key="1">
                  <Row gutter={[32, 16]} justify="space-between">
                    <Col span={24}>
                      <div>
                        <Divider orientation="left">Интернет + IPTV</Divider>
                        <Row
                          gutter={[32, { xs: 16, sm: 16, md: 24, lg: 32 }]}
                          justify={'space-around'}>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 7, order: 1 }}
                            lg={{ span: 7, order: 1 }}>
                            <div>
                              <div className="princing-item blue">
                                <div className="pricing-divider ">
                                  <h4
                                    className="pl-4 text-light"
                                    style={{
                                      fontSize: size.tariffNameFontSize,
                                    }}>
                                    Интернет 100
                                  </h4>
                                  <h4
                                    className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                    style={{
                                      fontSize: size.tariffCostFontSize,
                                    }}>
                                    330
                                    <span
                                      className="h6 pl-4"
                                      style={{
                                        fontSize: size.tariffAdsFontSize,
                                      }}>
                                      руб. / 30 дней
                                    </span>
                                  </h4>
                                  <svg
                                    className="pricing-divider-img"
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    id="Layer_1"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                    x="0px"
                                    xmlSpace="preserve"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px">
                                    <path
                                      className="deco-layer deco-layer--1"
                                      d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--2"
                                      d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--3"
                                      d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                      fill="#FFFFFF"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="deco-layer deco-layer--4"
                                      d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                      fill="#FFFFFF"
                                    />
                                  </svg>
                                </div>
                                <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                                  <div className="mb-4">
                                    <Space direction="vertical" size="middle">
                                      <Text strong>Скорость - 100 МБит/c</Text>
                                      <Text>
                                        Без ограничений по объему трафика
                                      </Text>
                                      <Text>
                                        IP-TV - бесплатно, от 156 каналов
                                      </Text>
                                      <Text type={'secondary'}>
                                        Посуточная тарификация
                                      </Text>
                                      <Text type={'secondary'}>
                                        Бесплатное подключение*
                                      </Text>
                                    </Space>
                                  </div>
                                  <div className="mb-4">
                                    <Button
                                      block
                                      type="danger"
                                      shape="round"
                                      size="large">
                                      Заказать
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          <Col
                            xs={{ span: 24, order: 2 }}
                            md={{ span: 7, order: 2 }}
                            lg={{ span: 7, order: 2 }}>
                            <div>
                              <div className="princing-item blue">
                                <div className="pricing-divider ">
                                  <h4
                                    className="pl-4 text-light"
                                    style={{
                                      fontSize: size.tariffNameFontSize,
                                    }}>
                                    Интернет 10
                                  </h4>
                                  <h4
                                    className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                    style={{
                                      fontSize: size.tariffCostFontSize,
                                    }}>
                                    270
                                    <span
                                      className="h6 pl-4"
                                      style={{
                                        fontSize: size.tariffAdsFontSize,
                                      }}>
                                      руб. / 30 дней
                                    </span>
                                  </h4>
                                  <svg
                                    className="pricing-divider-img"
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    id="Layer_1"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                    x="0px"
                                    xmlSpace="preserve"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px">
                                    <path
                                      className="deco-layer deco-layer--1"
                                      d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--2"
                                      d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--3"
                                      d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                      fill="#FFFFFF"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="deco-layer deco-layer--4"
                                      d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                      fill="#FFFFFF"
                                    />
                                  </svg>
                                </div>
                                <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                                  <div className="mb-4">
                                    <Space direction="vertical" size="middle">
                                      <Text strong>Скорость - 10 МБит/c</Text>
                                      <Text>
                                        Без ограничений по объему трафика
                                      </Text>
                                      <Text>
                                        IP-TV - бесплатно, от 156 каналов
                                      </Text>
                                      <Text type={'secondary'}>
                                        Посуточная тарификация
                                      </Text>
                                      <Text type={'secondary'}>
                                        Бесплатное подключение*
                                      </Text>
                                    </Space>
                                  </div>
                                  <div className="mb-4">
                                    <Button
                                      block
                                      type="danger"
                                      shape="round"
                                      size="large">
                                      Заказать
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          <Col
                            xs={{ span: 24, order: 3 }}
                            md={{ span: 7, order: 3 }}
                            lg={{ span: 7, order: 3 }}>
                            <div>
                              <div className="princing-item blue">
                                <div className="pricing-divider ">
                                  <h4
                                    className="pl-4 text-light"
                                    style={{
                                      fontSize: size.tariffNameFontSize,
                                    }}>
                                    Социальный
                                  </h4>
                                  <h4
                                    className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                    style={{
                                      fontSize: size.tariffCostFontSize,
                                    }}>
                                    150
                                    <span
                                      className="h6 pl-4"
                                      style={{
                                        fontSize: size.tariffAdsFontSize,
                                      }}>
                                      руб. / 30 дней
                                    </span>
                                  </h4>
                                  <svg
                                    className="pricing-divider-img"
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    id="Layer_1"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                    x="0px"
                                    xmlSpace="preserve"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px">
                                    <path
                                      className="deco-layer deco-layer--1"
                                      d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--2"
                                      d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--3"
                                      d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                      fill="#FFFFFF"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="deco-layer deco-layer--4"
                                      d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                      fill="#FFFFFF"
                                    />
                                  </svg>
                                </div>
                                <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                                  <div className="mb-4">
                                    <Space direction="vertical" size="middle">
                                      <Text strong>Скорость - 2 МБит/c</Text>
                                      <Text>
                                        Без ограничений по объему трафика
                                      </Text>
                                      <Text>
                                        IP-TV - бесплатно, от 156 каналов
                                      </Text>
                                      <Text type={'secondary'}>
                                        Посуточная тарификация
                                      </Text>
                                      <Text type={'secondary'}>
                                        Бесплатное подключение*
                                      </Text>
                                    </Space>
                                  </div>
                                  <div className="mb-4">
                                    <Button
                                      block
                                      type="danger"
                                      shape="round"
                                      size="large">
                                      Заказать
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          <Col
                            xs={{ span: 24, order: 4 }}
                            md={{ span: 24, order: 4 }}
                            lg={{ span: 24, order: 4 }}>
                            <Paragraph>
                              * провайдер, в случае необходимости, предоставляет
                              кабель, разъемы, на безоплатной основе, для
                              обеспечения качественного предоставления услуг.
                              При наличии у абонента уже проложенного кабеля,
                              предприятие осуществляет подключение с
                              использованием абонентского кабеля
                            </Paragraph>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                    <Col span={24}>
                      <div>
                        <Divider orientation="left">Технические услуги</Divider>
                        <Row
                          gutter={[32, { xs: 16, sm: 32, md: 48, lg: 64 }]}
                          justify="space-around">
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 7, order: 1 }}
                            lg={{ span: 7, order: 1 }}>
                            <div>
                              <div className="princing-item blue">
                                <div className="pricing-divider ">
                                  <h4
                                    className="pl-4 text-light"
                                    style={{
                                      fontSize: size.tariffNameFontSize,
                                    }}>
                                    Приостановление КТВ
                                  </h4>
                                  <h4
                                    className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                    style={{
                                      fontSize: size.tariffCostFontSize,
                                    }}>
                                    <span
                                      className="h6 pl-4"
                                      style={{
                                        fontSize: size.tariffAdsFontSize,
                                      }}>
                                      {''}
                                    </span>
                                  </h4>
                                  <svg
                                    className="pricing-divider-img"
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    id="Layer_1"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                    x="0px"
                                    xmlSpace="preserve"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px">
                                    <path
                                      className="deco-layer deco-layer--1"
                                      d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--2"
                                      d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--3"
                                      d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                      fill="#FFFFFF"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="deco-layer deco-layer--4"
                                      d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                      fill="#FFFFFF"
                                    />
                                  </svg>
                                </div>
                                <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                                  <div className="mb-4">
                                    <Space direction="vertical" size="middle">
                                      <Text strong>
                                        Краткая информация об услуге
                                      </Text>
                                      <Text>Краткая информация об услуге</Text>
                                      <Text>Краткая информация об услуге</Text>
                                      <Text type={'secondary'}>
                                        Посуточная тарификация
                                      </Text>
                                      <Text type={'secondary'}>
                                        Бесплатное подключение*
                                      </Text>
                                    </Space>
                                  </div>
                                  <div className="mb-4">
                                    <Button
                                      block
                                      type="danger"
                                      shape="round"
                                      size="large">
                                      Заказать
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>

                          <Col
                            xs={{ span: 24, order: 2 }}
                            md={{ span: 7, order: 2 }}
                            lg={{ span: 7, order: 2 }}>
                            <div>
                              <div className="princing-item blue">
                                <div className="pricing-divider ">
                                  <h4
                                    className="pl-4 text-light"
                                    style={{
                                      fontSize: size.tariffNameFontSize,
                                    }}>
                                    Приостановление Интернета
                                  </h4>
                                  <h4
                                    className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                    style={{
                                      fontSize: size.tariffCostFontSize,
                                    }}>
                                    <span
                                      className="h6 pl-4"
                                      style={{
                                        fontSize: size.tariffAdsFontSize,
                                      }}>
                                      {''}
                                    </span>
                                  </h4>
                                  <svg
                                    className="pricing-divider-img"
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    id="Layer_1"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                    x="0px"
                                    xmlSpace="preserve"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px">
                                    <path
                                      className="deco-layer deco-layer--1"
                                      d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--2"
                                      d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--3"
                                      d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                      fill="#FFFFFF"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="deco-layer deco-layer--4"
                                      d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                      fill="#FFFFFF"
                                    />
                                  </svg>
                                </div>
                                <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                                  <div className="mb-4">
                                    <Space direction="vertical" size="middle">
                                      <Text strong>
                                        Краткая информация об услуге
                                      </Text>
                                      <Text>Краткая информация об услуге</Text>
                                      <Text>Краткая информация об услуге</Text>
                                      <Text type={'secondary'}>
                                        Посуточная тарификация
                                      </Text>
                                      <Text type={'secondary'}>
                                        Бесплатное подключение*
                                      </Text>
                                    </Space>
                                  </div>
                                  <div className="mb-4">
                                    <Button
                                      block
                                      type="danger"
                                      shape="round"
                                      size="large">
                                      Заказать
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 3 }}
                            md={{ span: 7, order: 3 }}
                            lg={{ span: 7, order: 3 }}>
                            <div>
                              <div className="princing-item blue">
                                <div className="pricing-divider ">
                                  <h4
                                    className="pl-4 text-light"
                                    style={{
                                      fontSize: size.tariffNameFontSize,
                                    }}>
                                    Статитческий IP адрес
                                  </h4>
                                  <h4
                                    className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                    style={{
                                      fontSize: size.tariffCostFontSize,
                                    }}>
                                    80
                                    <span
                                      className="h6 pl-4"
                                      style={{
                                        fontSize: size.tariffAdsFontSize,
                                      }}>
                                      руб. / 30 дней
                                    </span>
                                  </h4>
                                  <svg
                                    className="pricing-divider-img"
                                    enableBackground="new 0 0 300 100"
                                    height="100px"
                                    id="Layer_1"
                                    preserveAspectRatio="none"
                                    version="1.1"
                                    viewBox="0 0 300 100"
                                    width="300px"
                                    x="0px"
                                    xmlSpace="preserve"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    xmlns="http://www.w3.org/2000/svg"
                                    y="0px">
                                    <path
                                      className="deco-layer deco-layer--1"
                                      d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--2"
                                      d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                      fill="#FFFFFF"
                                      opacity="0.6"
                                    />
                                    <path
                                      className="deco-layer deco-layer--3"
                                      d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                      fill="#FFFFFF"
                                      opacity="0.7"
                                    />
                                    <path
                                      className="deco-layer deco-layer--4"
                                      d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                      fill="#FFFFFF"
                                    />
                                  </svg>
                                </div>
                                <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                                  <div className="mb-4">
                                    <Space direction="vertical" size="middle">
                                      <Text strong>
                                        Краткая информация об услуге
                                      </Text>
                                      <Text> Краткая информация об услуге</Text>
                                      <Text> Краткая информация об услуге</Text>
                                      <Text type={'secondary'}>
                                        Посуточная тарификация
                                      </Text>
                                      <Text type={'secondary'}>
                                        Бесплатное подключение*
                                      </Text>
                                    </Space>
                                  </div>
                                  <div className="mb-4">
                                    <Button
                                      block
                                      type="danger"
                                      shape="round"
                                      size="large">
                                      Заказать
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 4 }}
                            md={{ span: 24, order: 4 }}
                            lg={{ span: 24, order: 4 }}>
                            <Paragraph>
                              * провайдер, в случае необходимости, предоставляет
                              кабель, разъемы, на безоплатной основе, для
                              обеспечения качественного предоставления услуг.
                              При наличии у абонента уже проложенного кабеля,
                              предприятие осуществляет подключение с
                              использованием абонентского кабеля
                            </Paragraph>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="Вариант услуг 2" key="2">
                  <Row gutter={[16, 16]} justify="space-around">
                    <Col span={24}>
                      <Divider orientation="left">Интернет + IPTV</Divider>
                      <Row
                        gutter={[16, { xs: 16, sm: 24, md: 32, lg: 40 }]}
                        justify="space-around">
                        <Col
                          xs={{ span: 24, order: 1 }}
                          md={{ span: 8, order: 1 }}
                          lg={{ span: 8, order: 1 }}>
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                            }
                            actions={[
                              <Button
                                style={{ width: 200 }}
                                size={'large'}
                                danger
                                type={'primary'}
                                shape={'round'}>
                                Заказать
                              </Button>,
                            ]}>
                            <Card.Meta
                              title={
                                <Typography.Title level={3}>
                                  Интернет 100
                                </Typography.Title>
                              }
                              description={
                                <Space direction="vertical" size="middle">
                                  <Typography.Title level={4}>
                                    330 руб./ 30 дней
                                  </Typography.Title>
                                  <Text strong>Скорость до 100 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              }
                            />
                          </Card>
                        </Col>

                        <Col
                          xs={{ span: 24, order: 2 }}
                          md={{ span: 8, order: 2 }}
                          lg={{ span: 8, order: 2 }}>
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                            }
                            actions={[
                              <Button
                                style={{ width: 200 }}
                                size={'large'}
                                danger
                                type={'primary'}
                                shape={'round'}>
                                Заказать
                              </Button>,
                            ]}>
                            <Card.Meta
                              title={
                                <Typography.Title level={3}>
                                  Интернет 10
                                </Typography.Title>
                              }
                              description={
                                <Space direction="vertical" size="middle">
                                  <Typography.Title level={4}>
                                    270 руб./ 30 дней
                                  </Typography.Title>
                                  <Text strong>Скорость до 10 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              }
                            />
                          </Card>
                        </Col>
                        <Col
                          xs={{ span: 24, order: 3 }}
                          md={{ span: 8, order: 3 }}
                          lg={{ span: 8, order: 3 }}>
                          <Card
                            hoverable
                            cover={
                              <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                            }
                            actions={[
                              <Button
                                style={{ width: 200 }}
                                size={'large'}
                                danger
                                type={'primary'}
                                shape={'round'}>
                                Заказать
                              </Button>,
                            ]}>
                            <Card.Meta
                              title={
                                <Typography.Title level={3}>
                                  Социальный
                                </Typography.Title>
                              }
                              description={
                                <Space direction="vertical" size="middle">
                                  <Typography.Title level={4}>
                                    150 руб./ 30 дней
                                  </Typography.Title>
                                  <Text strong>Скорость до 2 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              }
                            />
                          </Card>
                        </Col>
                        <Col
                          xs={{ span: 24, order: 4 }}
                          md={{ span: 24, order: 4 }}
                          lg={{ span: 24, order: 4 }}>
                          <Paragraph>
                            * провайдер, в случае необходимости, предоставляет
                            кабель, разъемы, на безоплатной основе, для
                            обеспечения качественного предоставления услуг. При
                            наличии у абонента уже проложенного кабеля,
                            предприятие осуществляет подключение с
                            использованием абонентского кабеля
                          </Paragraph>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <div>
                        <Divider orientation="left">Технические услуги</Divider>
                        <Row
                          gutter={[16, { xs: 16, sm: 32, md: 48, lg: 64 }]}
                          justify="space-around">
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>

                          <Col
                            xs={{ span: 24, order: 4 }}
                            md={{ span: 24, order: 4 }}
                            lg={{ span: 24, order: 4 }}>
                            <Paragraph>
                              <Typography.Title level={5}>
                                Обратите внимание
                              </Typography.Title>
                              <Typography.Paragraph>
                                Работает только безналичный расчет. Оплата за
                                дополнительные услуги взымается с Вашего
                                лицевого счета.
                              </Typography.Paragraph>
                            </Paragraph>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Tabs.TabPane>
                <Tabs.TabPane tab="вариант услуг 3" key="3">
                  <Row gutter={[16, 16]} justify="space-around">
                    <Col span={24}>
                      <Divider orientation="left">Интернет + IPTV</Divider>
                      <Row
                        gutter={[16, { xs: 16, sm: 24, md: 32, lg: 40 }]}
                        justify="space-around">
                        <Col
                          xs={{ span: 24, order: 1 }}
                          md={{ span: 8, order: 1 }}
                          lg={{ span: 8, order: 1 }}>
                          <ServiceCard title={'Интернет 100'} />
                        </Col>

                        <Col
                          xs={{ span: 24, order: 2 }}
                          md={{ span: 8, order: 2 }}
                          lg={{ span: 8, order: 2 }}>
                          <ServiceCard title={'Интернет 100'} />
                        </Col>
                        <Col
                          xs={{ span: 24, order: 3 }}
                          md={{ span: 8, order: 3 }}
                          lg={{ span: 8, order: 3 }}>
                          <ServiceCard title={'Интернет 100'} />
                        </Col>
                        <Col
                          xs={{ span: 24, order: 4 }}
                          md={{ span: 24, order: 4 }}
                          lg={{ span: 24, order: 4 }}>
                          <Paragraph>
                            * провайдер, в случае необходимости, предоставляет
                            кабель, разъемы, на безоплатной основе, для
                            обеспечения качественного предоставления услуг. При
                            наличии у абонента уже проложенного кабеля,
                            предприятие осуществляет подключение с
                            использованием абонентского кабеля
                          </Paragraph>
                        </Col>
                      </Row>
                    </Col>
                    <Col span={24}>
                      <div>
                        <Divider orientation="left">Технические услуги</Divider>
                        <Row
                          gutter={[16, { xs: 16, sm: 32, md: 48, lg: 64 }]}
                          justify="space-around">
                          <Col
                            xs={{ span: 24, order: 1 }}
                            md={{ span: 8, order: 1 }}
                            lg={{ span: 8, order: 1 }}>
                            <Card
                              hoverable
                              cover={
                                <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                />
                              }
                              actions={[
                                <Button
                                  style={{ width: 200 }}
                                  size={'large'}
                                  danger
                                  type={'primary'}
                                  shape={'round'}>
                                  Заказать
                                </Button>,
                              ]}>
                              <Card.Meta
                                title={
                                  <Typography.Title level={5}>
                                    Отключение КТВ
                                  </Typography.Title>
                                }
                                description={
                                  <Space direction="vertical" size="small">
                                    <Text>
                                      "Кабельное телевидение" можно
                                      приостановить 1(один)раз в 90(девяносто)
                                      календарных дней путем написания заявления
                                      в Абонентской отделе, на срок не более чем
                                      180(сто восемдесят) дней. Спасибо за
                                      обращение!
                                    </Text>
                                  </Space>
                                }
                              />
                            </Card>
                          </Col>
                          <Col
                            xs={{ span: 24, order: 4 }}
                            md={{ span: 24, order: 4 }}
                            lg={{ span: 24, order: 4 }}>
                            <Paragraph>
                              <Typography.Title level={5}>
                                Обратите внимание
                              </Typography.Title>
                              <Typography.Paragraph>
                                Работает только безналичный расчет. Оплата за
                                дополнительные услуги взымается с Вашего
                                лицевого счета.
                              </Typography.Paragraph>
                            </Paragraph>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>
                </Tabs.TabPane>
              </Tabs>
              {/*<Row gutter={[16, 16]} justify="space-around">
                <Col span={24}>
                  <div>
                    <Divider orientation="left">Интернет + IPTV</Divider>
                    <Row
                      gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}
                      justify="space-around">
                      <Col
                        xs={{ span: 24, order: 1 }}
                        md={{ span: 8, order: 1 }}
                        lg={{ span: 8, order: 1 }}>
                        <div>
                          <div className="princing-item blue">
                            <div className="pricing-divider ">
                              <h4
                                className="pl-4 text-light"
                                style={{ fontSize: size.tariffNameFontSize }}>
                                Интернет 100
                              </h4>
                              <h4
                                className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                style={{ fontSize: size.tariffCostFontSize }}>
                                330
                                <span
                                  className="h6 pl-4"
                                  style={{ fontSize: size.tariffAdsFontSize }}>
                                  руб. / 30 дней
                                </span>
                              </h4>
                              <svg
                                className="pricing-divider-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0px">
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                            <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                              <div className="mb-4">
                                <Space direction="vertical" size="middle">
                                  <Text strong>Скорость - 100 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              </div>
                              <div className="mb-4">
                                <Button
                                  block
                                  type="danger"
                                  shape="round"
                                  size="large">
                                  Заказать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col
                        xs={{ span: 24, order: 2 }}
                        md={{ span: 8, order: 2 }}
                        lg={{ span: 8, order: 2 }}>
                        <div>
                          <div className="princing-item blue">
                            <div className="pricing-divider ">
                              <h4
                                className="pl-4 text-light"
                                style={{ fontSize: size.tariffNameFontSize }}>
                                Интернет 10
                              </h4>
                              <h4
                                className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                style={{ fontSize: size.tariffCostFontSize }}>
                                270
                                <span
                                  className="h6 pl-4"
                                  style={{ fontSize: size.tariffAdsFontSize }}>
                                  руб. / 30 дней
                                </span>
                              </h4>
                              <svg
                                className="pricing-divider-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0px">
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                            <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                              <div className="mb-4">
                                <Space direction="vertical" size="middle">
                                  <Text strong>Скорость - 10 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              </div>
                              <div className="mb-4">
                                <Button
                                  block
                                  type="danger"
                                  shape="round"
                                  size="large">
                                  Заказать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 24, order: 3 }}
                        md={{ span: 8, order: 3 }}
                        lg={{ span: 8, order: 3 }}>
                        <div>
                          <div className="princing-item blue">
                            <div className="pricing-divider ">
                              <h4
                                className="pl-4 text-light"
                                style={{ fontSize: size.tariffNameFontSize }}>
                                Социальный
                              </h4>
                              <h4
                                className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                style={{ fontSize: size.tariffCostFontSize }}>
                                150
                                <span
                                  className="h6 pl-4"
                                  style={{ fontSize: size.tariffAdsFontSize }}>
                                  руб. / 30 дней
                                </span>
                              </h4>
                              <svg
                                className="pricing-divider-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0px">
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                            <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                              <div className="mb-4">
                                <Space direction="vertical" size="middle">
                                  <Text strong>Скорость - 2 МБит/c</Text>
                                  <Text>Без ограничений по объему трафика</Text>
                                  <Text>IP-TV - бесплатно, от 156 каналов</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              </div>
                              <div className="mb-4">
                                <Button
                                  block
                                  type="danger"
                                  shape="round"
                                  size="large">
                                  Заказать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 24, order: 4 }}
                        md={{ span: 24, order: 4 }}
                        lg={{ span: 24, order: 4 }}>
                        <Paragraph>
                          * провайдер, в случае необходимости, предоставляет
                          кабель, разъемы, на безоплатной основе, для
                          обеспечения качественного предоставления услуг. При
                          наличии у абонента уже проложенного кабеля,
                          предприятие осуществляет подключение с использованием
                          абонентского кабеля
                        </Paragraph>
                      </Col>
                    </Row>
                  </div>
                </Col>
                <Col span={24}>
                  <div>
                    <Divider orientation="left">Технические услуги</Divider>
                    <Row
                      gutter={{ xs: 16, sm: 32, md: 48, lg: 64 }}
                      justify="space-around">
                      <Col
                        xs={{ span: 24, order: 1 }}
                        md={{ span: 8, order: 1 }}
                        lg={{ span: 8, order: 1 }}>
                        <div>
                          <div className="princing-item blue">
                            <div className="pricing-divider ">
                              <h4
                                className="pl-4 text-light"
                                style={{ fontSize: size.tariffNameFontSize }}>
                                Приостановление КТВ
                              </h4>
                              <h4
                                className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                style={{ fontSize: size.tariffCostFontSize }}>
                                <span
                                  className="h6 pl-4"
                                  style={{
                                    fontSize: size.tariffAdsFontSize,
                                  }}>
                                  {''}
                                </span>
                              </h4>
                              <svg
                                className="pricing-divider-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0px">
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                            <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                              <div className="mb-4">
                                <Space direction="vertical" size="middle">
                                  <Text strong>
                                    Краткая информация об услуге
                                  </Text>
                                  <Text>Краткая информация об услуге</Text>
                                  <Text>Краткая информация об услуге</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              </div>
                              <div className="mb-4">
                                <Button
                                  block
                                  type="danger"
                                  shape="round"
                                  size="large">
                                  Заказать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>

                      <Col
                        xs={{ span: 24, order: 2 }}
                        md={{ span: 8, order: 2 }}
                        lg={{ span: 8, order: 2 }}>
                        <div>
                          <div className="princing-item blue">
                            <div className="pricing-divider ">
                              <h4
                                className="pl-4 text-light"
                                style={{ fontSize: size.tariffNameFontSize }}>
                                Приостановление Интернета
                              </h4>
                              <h4
                                className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                style={{ fontSize: size.tariffCostFontSize }}>
                                <span
                                  className="h6 pl-4"
                                  style={{
                                    fontSize: size.tariffAdsFontSize,
                                  }}>
                                  {''}
                                </span>
                              </h4>
                              <svg
                                className="pricing-divider-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0px">
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                            <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                              <div className="mb-4">
                                <Space direction="vertical" size="middle">
                                  <Text strong>
                                    Краткая информация об услуге
                                  </Text>
                                  <Text>Краткая информация об услуге</Text>
                                  <Text>Краткая информация об услуге</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              </div>
                              <div className="mb-4">
                                <Button
                                  block
                                  type="danger"
                                  shape="round"
                                  size="large">
                                  Заказать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 24, order: 3 }}
                        md={{ span: 8, order: 3 }}
                        lg={{ span: 8, order: 3 }}>
                        <div>
                          <div className="princing-item blue">
                            <div className="pricing-divider ">
                              <h4
                                className="pl-4 text-light"
                                style={{ fontSize: size.tariffNameFontSize }}>
                                Статитческий IP адрес
                              </h4>
                              <h4
                                className="my-0 display-2 text-light font-weight-normal mb-3 pl-4"
                                style={{ fontSize: size.tariffCostFontSize }}>
                                80
                                <span
                                  className="h6 pl-4"
                                  style={{ fontSize: size.tariffAdsFontSize }}>
                                  руб. / 30 дней
                                </span>
                              </h4>
                              <svg
                                className="pricing-divider-img"
                                enableBackground="new 0 0 300 100"
                                height="100px"
                                id="Layer_1"
                                preserveAspectRatio="none"
                                version="1.1"
                                viewBox="0 0 300 100"
                                width="300px"
                                x="0px"
                                xmlSpace="preserve"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xmlns="http://www.w3.org/2000/svg"
                                y="0px">
                                <path
                                  className="deco-layer deco-layer--1"
                                  d="M30.913,43.944c0,0,42.911-34.464,87.51-14.191c77.31,35.14,113.304-1.952,146.638-4.729
	c48.654-4.056,69.94,16.218,69.94,16.218v54.396H30.913V43.944z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--2"
                                  d="M-35.667,44.628c0,0,42.91-34.463,87.51-14.191c77.31,35.141,113.304-1.952,146.639-4.729
	c48.653-4.055,69.939,16.218,69.939,16.218v54.396H-35.667V44.628z"
                                  fill="#FFFFFF"
                                  opacity="0.6"
                                />
                                <path
                                  className="deco-layer deco-layer--3"
                                  d="M43.415,98.342c0,0,48.283-68.927,109.133-68.927c65.886,0,97.983,67.914,97.983,67.914v3.716
	H42.401L43.415,98.342z"
                                  fill="#FFFFFF"
                                  opacity="0.7"
                                />
                                <path
                                  className="deco-layer deco-layer--4"
                                  d="M-34.667,62.998c0,0,56-45.667,120.316-27.839C167.484,57.842,197,41.332,232.286,30.428
	c53.07-16.399,104.047,36.903,104.047,36.903l1.333,36.667l-372-2.954L-34.667,62.998z"
                                  fill="#FFFFFF"
                                />
                              </svg>
                            </div>
                            <div className="card-body bg-white mt-0 mb-4 shadow elevation-4">
                              <div className="mb-4">
                                <Space direction="vertical" size="middle">
                                  <Text strong>
                                    Краткая информация об услуге
                                  </Text>
                                  <Text> Краткая информация об услуге</Text>
                                  <Text> Краткая информация об услуге</Text>
                                  <Text type={'secondary'}>
                                    Посуточная тарификация
                                  </Text>
                                  <Text type={'secondary'}>
                                    Бесплатное подключение*
                                  </Text>
                                </Space>
                              </div>
                              <div className="mb-4">
                                <Button
                                  block
                                  type="danger"
                                  shape="round"
                                  size="large">
                                  Заказать
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={{ span: 24, order: 4 }}
                        md={{ span: 24, order: 4 }}
                        lg={{ span: 24, order: 4 }}>
                        <Paragraph>
                          * провайдер, в случае необходимости, предоставляет
                          кабель, разъемы, на безоплатной основе, для
                          обеспечения качественного предоставления услуг. При
                          наличии у абонента уже проложенного кабеля,
                          предприятие осуществляет подключение с использованием
                          абонентского кабеля
                        </Paragraph>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>*/}
            </PageHeader>
          </Col>
        </Row>
      </Layout>
    </>
  )
}
export default Services
