import React, { useEffect, useState } from 'react'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import {
  message,
  Alert,
  Breadcrumb,
  Button,
  Col,
  Descriptions,
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
import styles from './Profile.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../../store/actionCreators/ProfileActionCreator'

const Profile = () => {
  const dispatch = useDispatch()
  const [deposit, setDeposit] = useState(120)
  const [isDebtor, setIsDebtor] = useState(false)
  const [visible, setVisible] = React.useState(false)
  const [phone, setPhone] = useState({
    main: '0721044880',
    secondary: '0664841472',
  })
  const profile = useSelector(state => state.profile)
  console.log('profile information on profile page: ', profile)
  useEffect(() => {
    dispatch(getProfile())
  }, [])

  const success = text => {
    message.success(text).then(res => console.log(res))
  }

  const error = text => {
    message.error(text).then(res => console.log(res))
  }
  const showModalPhoneEdit = () => {
    setVisible(true)
  }

  const onCreate = values => {
    console.log('Received values of form: ', values)
    setPhone({ main: values.mainPhone, secondary: values.secondaryPhone })
    setVisible(false)
  }
  const handleSuccessPhone = () => {
    setVisible(false)
    success('Изменения приняты')
  }
  const handleSuccessPassword = () => {
    success('Пароль успешно уизменен')
  }
  const handleCancelPhone = () => {
    setVisible(false)
    error('Отменили')
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
      <Link to={paths.join('/')} key={paths}>
        {route.breadcrumbName}
      </Link>
    )
  }

  const menu = (
    <Menu key={'menu1'}>
      <Menu.Item onClick={showModalPhoneEdit} key="1">
        Редактировать телефон
      </Menu.Item>
      <Menu.Item onClick={handleSuccessPassword} key="2">
        Изменить пароль
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          setIsDebtor(!isDebtor)
          setDeposit(-deposit)
          if (!isDebtor) {
            success('Активирован долг по лицевому счету')
          } else {
            success('Деактивирован долг по лицевому счету')
          }
        }}
        key="3">
        Долг вкл/выкл
      </Menu.Item>
      <Menu.Item onClick={() => dispatch({ type: 'CLICK' })} key="4">
        Загрузить данные
      </Menu.Item>
    </Menu>
  )
  return (
    <>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onOk={handleSuccessPhone}
        onCancel={handleCancelPhone}
        phone={phone}
        sms={false}
      />
      <InfoBoxes switch={true} />
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
          <Dropdown
            overlay={menu}
            placement="bottomRight"
            arrow
            key={'pagekey1'}>
            <Button type="primary" key={1}>
              Дополнительно
            </Button>
          </Dropdown>,
        ]}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24 }}
            md={{ span: 24, offset: 0 }}
            lg={{ span: 24, offset: 0 }}>
            <Descriptions
              title={
                <h6 className={`${styles.divider} ${styles.gradient}`}>
                  Финансы
                </h6>
              }
              bordered
              column={{ xxl: 2, xl: 2, lg: 2, md: 2, sm: 1, xs: 1 }}>
              <Descriptions.Item label="Баланс руб." key={1}>
                <div style={{ fontSize: '16px' }}>
                  {deposit >= 0 ? (
                    deposit
                  ) : (
                    <Tag
                      color="error"
                      style={{ fontSize: '18px', padding: '10px' }}>
                      {deposit}
                    </Tag>
                  )}
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Тарифный пакет" key={2}>
                <div style={{ fontSize: '16px' }}>
                  Интернет 100 + IPTV + Кабельное ТВ
                </div>
              </Descriptions.Item>
              <Descriptions.Item label="Статус тарифного плана" key={3}>
                Активно
              </Descriptions.Item>
              <Descriptions.Item label="Оплачено дней" key={4}>
                31
              </Descriptions.Item>
              <Descriptions.Item label="Дата окончания тарифа" key={5}>
                2021-12-19
              </Descriptions.Item>

              <Descriptions.Item
                label="Оплата за тарифный пакет, руб./сутки"
                key={6}>
                Интернет 100 + IPTV: 11 руб./сутки
                <br />
                Кабельное ТВ: 2.5 руб./сутки
                <br />
                Реальный IP-адрес: 2.8 руб./сутки
              </Descriptions.Item>
              <Descriptions.Item label="К оплате, руб./сутки" key={7}>
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
                title={
                  <h6 className={`${styles.divider} ${styles.gradient}`}>
                    Личная информация
                  </h6>
                }
                bordered
                column={{ xxl: 4, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
                key={1}>
                <Descriptions.Item label="ФИО" key={2}>
                  Тестеров Тестер Тестерович
                </Descriptions.Item>
                <Descriptions.Item label="Логин" key={3}>
                  erem-7-001
                </Descriptions.Item>
                <Descriptions.Item
                  label="Л/С"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={4}>
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
                <Descriptions.Item label="Улица" key={5}>
                  Шевченко Т.Г улица
                </Descriptions.Item>
                <Descriptions.Item label="Дом" key={6}>
                  4
                </Descriptions.Item>
                <Descriptions.Item label="Кваритра" key={7}>
                  124
                </Descriptions.Item>
                <Descriptions.Item label="Паспорт выдан" key={8}>
                  Ленинским РО УМВД Украины в Луганской области
                </Descriptions.Item>
                <Descriptions.Item label="№ паспорта" key={9}>
                  ЕК 141029
                </Descriptions.Item>
                <Descriptions.Item label="Дата выдачи" key={10}>
                  2021-11-21
                </Descriptions.Item>
                <Descriptions.Item
                  label="Тел. основной"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={11}>
                  {phone.main}
                </Descriptions.Item>
                <Descriptions.Item
                  label="Тел. доп."
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={12}>
                  {phone.secondary}
                </Descriptions.Item>
                <Descriptions.Item
                  label="№ договра"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={13}>
                  045789
                </Descriptions.Item>
                <Descriptions.Item
                  label="Договор от"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={14}>
                  2021-11-21
                </Descriptions.Item>
                <Descriptions.Item
                  label="Дата регистрации"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={15}>
                  2021-11-19
                </Descriptions.Item>
                <Descriptions.Item
                  label="Дата активации"
                  contentStyle={{ whiteSpace: 'nowrap' }}
                  key={16}>
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

const CollectionCreateForm = ({
  visible,
  onCreate,
  onCancel,
  onOk,
  phone,
  sms,
}) => {
  const [form] = Form.useForm()
  const [smsChecked, setSmsChecked] = useState(sms)
  const onChange = () => {
    setSmsChecked(!smsChecked)
  }

  const onSubmitForm = () => {
    form
      .validateFields()
      .then(values => {
        form.resetFields()
        onCreate(values)
        onOk()
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
