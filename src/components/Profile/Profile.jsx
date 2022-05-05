import * as dayjs from 'dayjs'

import {
  Breadcrumb,
  Button,
  Col,
  Dropdown,
  Form,
  Input,
  Menu,
  Modal,
  PageHeader,
  Row,
  Skeleton,
  Space,
  Spin,
  Switch,
  message,
} from 'antd'
import React, { useEffect, useState } from 'react'
import {
  setCreditModal,
  setCreditModalDisabled,
} from '../../store/slices/profileSlice'
import { useDispatch, useSelector } from 'react-redux'

import { Finance } from './Finance'
import InfoBoxes from '../common/InfoBoxes/InfoBoxes'
import { Link } from 'react-router-dom'
import Loader from './../common/Loader'
import { PersonalInformation } from './PersonalInformation'
import { getProfile } from '../../store/actionCreators/ProfileActionCreator'
import { v4 as uuid } from 'uuid'

const Profile = ({ login }) => {
  //TODO add popovers

  const [type, setType] = useState(2)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProfile())
  }, [dispatch])
  // finance
  const [deposit, setDeposit] = useState(0)
  const [fee, setFee] = useState(0)
  const [paidDays, setDays] = useState(0)
  const [paidTo, setPaidTo] = useState('0000-00-00')
  const [tariffName, setTariffName] = useState('')
  const [tariffState, setTariffState] = useState('')
  const [tariffInfo, setTariffInfo] = useState(``)
  const [visible, setVisible] = React.useState(false)
  // personal information
  const [fio, setFio] = useState('')
  const [uid, setUid] = useState('')
  const [address, setAddress] = useState({})
  const [personalPhone, setPersonalPhone] = useState('')
  const [contract, setContract] = useState('')
  const [registration, setRegistration] = useState('')
  const [activation, setActivation] = useState('')
  const [phone, setPhone] = useState({
    main: '0721044880',
    secondary: '0664841472',
  })
  const profile = useSelector(state => state.profile)

  // нужно оставить
  useEffect(() => {
    setTariffInfo(
      `${profile.data.dvmain?.tariff.comments} : ${profile.data.dvmain?.tariff.day_fee} руб.`
    )
  }, [
    profile.data.dvmain?.tariff.comments,
    profile.data.dvmain?.tariff.day_fee,
  ])

  useEffect(() => {
    // устанавливаю дату окончани тарифа
    setPaidTo(dayjs().add(paidDays, 'day').format('YYYY-MM-DD'))
  }, [paidDays])

  useEffect(() => {
    // устанавливаю количество оплаченных дней
    profile.data.bill?.deposit > 0
      ? setDays(
          Math.floor(
            profile.data.bill?.deposit / profile.data.dvmain?.tariff.day_fee
          )
        )
      : setDays(0)
  }, [profile.data.bill?.deposit, profile.data.dvmain?.tariff.day_fee])
  useEffect(() => {
    profile.data?.users_pi && setFio(profile.data.users_pi.fio)
  }, [profile.data.users_pi])
  useEffect(() => {
    const ls = String(profile.data.uid)
    let newLs = ''
    for (let i = 0; i < 6 - ls.length; i++) {
      newLs += 0
    }
    profile.data?.uid && setUid(`${newLs}${ls}`)
  }, [profile.data.uid])
  useEffect(() => {
    profile.data?.users_pi &&
      setAddress({
        street: profile.data.users_pi.address_street,
        flat: profile.data.users_pi.address_flat,
        build: profile.data.users_pi.address_build,
      })
  }, [profile.data.users_pi])
  useEffect(() => {
    profile.data?.users_pi && setPersonalPhone(profile.data.users_pi.phone)
  }, [profile.data.users_pi])
  useEffect(() => {
    profile.data?.users_pi && setContract(profile.data.users_pi.contract_id)
  }, [profile.data.users_pi])
  useEffect(() => {
    profile.data && setRegistration(profile.data.registration)
  }, [profile.data, profile.data.registration])
  useEffect(() => {
    profile.data && setActivation(profile.data.activate)
  }, [profile.data, profile.data.activate])

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
      path: '/',
      breadcrumbName: 'Домашняя',
    },
    {
      path: '/profile',
      breadcrumbName: 'Профиль',
    },
  ]
  function itemRender(route, params, routes, paths) {
    console.log('route:', route)
    console.log('params:', params)
    console.log('routes:', routes)
    console.log('paths:', paths)
    const last = routes.indexOf(route) === routes.length - 1
    return last ? (
      <span>{route.breadcrumbName}</span>
    ) : (
      <Link to={paths.join('/')} key={paths}>
        {route.breadcrumbName}
      </Link>
    )
  }

  const [isCreditModalVisible, setIsCreditModalVisible] = useState(false)
  const showCreditModal = () => {
    // setIsCreditModalVisible(true)
    dispatch(setCreditModal({ isVisible: true }))
  }
  const handleCreditModalOk = () => {
    setIsCreditModalVisible(false)
  }
  const handleCreditModalCancel = () => {
    // setIsCreditModalVisible(false)
    dispatch(setCreditModal({ isVisible: false }))
    dispatch(setCreditModalDisabled())
  }
  const menu = (
    <Menu key={'menu1'}>
      <Menu.Item onClick={showCreditModal} key={uuid()}>
        Кредит
      </Menu.Item>
      {/* <Menu.Item onClick={showModalPhoneEdit} key={uuid()}>
        Редактировать телефон
      </Menu.Item>
      <Menu.Item onClick={handleSuccessPassword} key={uuid()}>
        Изменить пароль
      </Menu.Item>
      <Menu.Item onClick={() => setDeposit(deposit + 20)} key={uuid()}>
        Добавить денег абоненту
      </Menu.Item>
      <Menu.SubMenu title="Инфо панели" key={uuid()}>
        <Menu.Item onClick={() => setType(0)} key={uuid()}>
          Вариант 1
        </Menu.Item>
        <Menu.Item onClick={() => setType(1)} key={uuid()}>
          Вариант 2
        </Menu.Item>
        <Menu.Item onClick={() => setType(2)} key={uuid()}>
          Вариант 3
        </Menu.Item>
      </Menu.SubMenu> */}
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
      {/* TODO add loading for info boxes*/}
      <Space direction="vertical" size={'middle'}>
        <InfoBoxes
          paidTo={paidTo}
          type={type}
          deposit={profile.data.bill?.deposit}
          paidDays={paidDays}
          fee={profile.data.dvmain?.tariff.day_fee}
          loading={profile.isLoading}
        />
        {profile.isLoading ? (
          <Loader />
        ) : (
          <PageHeader
            style={{ height: '100%' }}
            breadcrumb={<Breadcrumb itemRender={itemRender} routes={routes} />}
            ghost={false}
            onBack={() => window.history.back()}
            title="Профиль"
            subTitle={login}
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
                <Finance
                  deposit={profile.data.bill?.deposit}
                  fee={profile.data.dvmain?.tariff.day_fee}
                  modalDisabled={profile.credit?.disabled}
                  creditError={profile.credit?.error}
                  tariffName={profile.data.dvmain?.tariff.comments}
                  tariffState={profile.data.state}
                  isCreditModalVisible={profile.credit.isVisible}
                  paidTo={paidTo}
                  paidDays={paidDays}
                  tariffInfo={tariffInfo}
                  showCreditModal={showCreditModal}
                  handleCreditModalOk={handleCreditModalOk}
                  handleCreditModalCancel={handleCreditModalCancel}
                />
              </Col>
              <Col
                xs={{ span: 24 }}
                md={{ span: 24, offset: 0 }}
                lg={{ span: 24, offset: 0 }}>
                <div className="mb-4">
                  <PersonalInformation
                    activation={profile.data.activate}
                    registration={profile.data.registration}
                    address={{
                      street: profile.data.users_pi?.address_street,
                      flat: profile.data.users_pi?.address_flat,
                      build: profile.data.users_pi?.address_build,
                    }}
                    personalPhone={profile.data.users_pi?.phone}
                    contract={profile.data.users_pi?.contract_id}
                    login={profile.data.id}
                    fio={profile.data.users_pi?.fio}
                    uid={profile.data.uid}
                  />
                </div>
              </Col>
            </Row>
          </PageHeader>
        )}
      </Space>
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
