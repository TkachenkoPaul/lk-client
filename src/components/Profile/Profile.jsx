import React, { useEffect, useState } from 'react'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Descriptions,
  Divider,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  PageHeader,
  Row,
  Switch,
  Tag,
  Typography,
} from 'antd'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import {
  AppstoreAddOutlined,
  BookOutlined,
  CommentOutlined,
  DashboardOutlined,
  ExclamationCircleOutlined,
  IdcardOutlined,
  WalletOutlined,
} from '@ant-design/icons'
import styles from './Profile.module.scss'

const Profile = () => {
  const [switchBoxes, setSwitchBoxes] = useState(false)
  const [deposite, setDeposite] = useState(120)
  const [isDebtor, setIsDebtor] = useState(false)
  const [visible, setVisible] = React.useState(false)
  const [confirmLoading, setConfirmLoading] = React.useState(false)
  const [modalText, setModalText] = React.useState('Content of the modal')
  const [divider, setDivider] = useState(1)
  const [phone, setPhone] = useState({
    main: '0721044880',
    secondary: '0664841472',
  })

  const showModalPhoneEdit = () => {
    setVisible(true)
  }

  const handleOk = () => {
    setModalText('The modal will be closed after two seconds')
    setConfirmLoading(true)
    setTimeout(() => {
      setVisible(false)
      setConfirmLoading(false)
    }, 2000)
  }
  const onCreate = values => {
    console.log('Received values of form: ', values)
    setPhone({ main: values.mainPhone, secondary: values.secondaryPhone })
    setVisible(false)
  }
  const handleCancel = () => {
    setVisible(false)
  }
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
  function itemRender(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')}>{route.breadcrumbName}</Link>
    )
  }

  const handleClick = e => {
    console.log(e)
  }
  const menus = [
    {
      key: 1,
      title: 'button1',
      icon: <IdcardOutlined />,
    },
    {
      key: 2,
      title: 'button2',
      icon: <WalletOutlined />,
    },
    {
      key: 3,
      title: 'button3',
      icon: <CommentOutlined />,
    },
  ]
  const menusElements = menus.map(menu => {
    return (
      <Menu.Item key={menu.key} icon={menu.icon}>
        {menu.title}
      </Menu.Item>
    )
  })
  let selectDivider = text => {
    if (divider === 1) {
      return <Divider orientation="left">{text}</Divider>
    } else if (divider === 2) {
      return (
        <h6
          className={`${styles.divider} ${styles.line} ${styles.glow}`}
          contentEditable>
          {text}
        </h6>
      )
    } else if (divider === 3) {
      return (
        <h6 className={`${styles.divider} ${styles.gradient}`} contentEditable>
          {text}
        </h6>
      )
    }
  }

  const menu = (
    <Menu>
      <Menu.Item>Кнопка 1</Menu.Item>
      <Menu.Item>Кнопка 2</Menu.Item>
      <Menu.Item>Кнопка 3</Menu.Item>
    </Menu>
  )
  return (
    <>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={handleCancel}
        phone={phone}
        sms={false}
      />
      <InfoBoxes switch={switchBoxes} />
      {isDebtor && (
        <Alert
          banner
          type="error"
          message={
            <Marquee gradient={false} pauseOnHover={true}>
              У вас не достаточно средств на счету. Для возобновления
              пользования услугой интернет нужно внести денежные средства на
              лицевой счет, который указан в вашем договоре
            </Marquee>
          }
        />
      )}
      <PageHeader
        style={{ height: '100%' }}
        breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
        ghost={false}
        onBack={() => window.history.back()}
        title="Профиль"
        subTitle="erem-7-001"
        extra={[
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Button type="primary">Дополнительно</Button>
          </Dropdown>,

          // <Menu theme="light" onClick={handleClick} mode="inline">
          //   {menusElements}
          // </Menu>,

          <Button key="11" type="primary" onClick={() => setDivider(1)}>
            1
          </Button>,
          <Button key="12" type="primary" onClick={() => setDivider(2)}>
            2
          </Button>,
          <Button key="13" type="primary" onClick={() => setDivider(3)}>
            3
          </Button>,
          <Button key="1" type="primary" onClick={showModalPhoneEdit}>
            Редактировать телефон
          </Button>,
          <Switch
            style={{ marginLeft: '1em' }}
            onChange={() => {
              setIsDebtor(!isDebtor)
              setDeposite(-deposite)
            }}
            checkedChildren={
              <Typography.Paragraph>Есть долг</Typography.Paragraph>
            }
            unCheckedChildren={
              <Typography.Paragraph>Нет долга </Typography.Paragraph>
            }
          />,
          <Switch
            style={{ marginLeft: '1em' }}
            onChange={() => {
              setSwitchBoxes(!switchBoxes)
            }}
            checkedChildren={
              <Typography.Paragraph>Вариент 1</Typography.Paragraph>
            }
            unCheckedChildren={
              <Typography.Paragraph>Вариант 2</Typography.Paragraph>
            }
          />,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Descriptions
              // layout="vertical"
              // size="middle"
              title={selectDivider('Финансы')}
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Баланс руб.">
                <div style={{ fontSize: '16px' }}>
                  {deposite >= 0 ? (
                    deposite
                  ) : (
                    <Tag
                      color="error"
                      style={{ fontSize: '18px', padding: '10px' }}>
                      {deposite}
                    </Tag>
                  )}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Тарифный пакет" span={2}>
                <div style={{ fontSize: '16px' }}>
                  Интернет 100 + IPTV + Кабельное ТВ
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Статус тарифного плана">
                Активно
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
                // size="middle"
                title={selectDivider('Личная информация')}
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
                  <Typography.Paragraph
                    copyable={{
                      tooltips: [
                        'Нажмите, чтобы скопировать текст в буфер обмена',
                        'Успешно скопировано',
                      ],
                    }}>
                    902145
                  </Typography.Paragraph>
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
                  {phone.main}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Тел. доп."
                  contentStyle={{ whiteSpace: 'nowrap' }}>
                  {phone.secondary}
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

const CollectionCreateForm = ({ visible, onCreate, onCancel, phone, sms }) => {
  const [form] = Form.useForm()
  const [smsChecked, setSmsChecked] = useState(sms)
  const onChange = () => {
    setSmsChecked(!smsChecked)
  }
  useEffect(() => {
    return () => {
      console.log('phone from modal component', phone)
    }
  }, [phone])

  const onSubmitForm = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields()
        onCreate(values)
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }
  return (
    <Modal
      visible={visible}
      title="Изменить номер телефона"
      okText="Принять"
      cancelText="Отменить"
      onCancel={onCancel}
      onOk={onSubmitForm}>
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          mainPhone: phone.main,
          secondaryPhone: phone.secondary,
        }}>
        <Form.Item
          name="mainPhone"
          label="Основной номер телефона"
          rules={[
            {
              required: true,
              message: 'Пожалуста, введите номер телефона',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="secondaryPhone"
          label="Дополнительный номер телефона"
          rules={[
            {
              required: true,
              message: 'Пожалуста, введите номер телефона',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item label="sms-информаривание" valuePropName="checked">
          <Switch cheched={smsChecked} onChange={onChange} />
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default Profile
