import React, { useEffect, useState } from 'react'
import {
  message,
  Alert,
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
  Switch,
  Space,
  Table,
} from 'antd'
import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import { useDispatch, useSelector } from 'react-redux'

const Test = () => {
  const dispatch = useDispatch()
  const [deposit, setDeposit] = useState(120)
  const [isDebtor, setIsDebtor] = useState(false)
  const [visible, setVisible] = React.useState(false)
  const [phone, setPhone] = useState({
    main: '0721044880',
    secondary: '0664841472',
  })

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

  const starshipsData = useSelector(state => state.test.starships.data)
  const isLoading = useSelector(state => state.test.starships.isLoading)
  const total = useSelector(state => state.test.starships.total)
  console.log('starshipsData: ', starshipsData)
  console.log('isLoading: ', isLoading)

  const addDataHandler = page => {
    dispatch({ type: 'CLICK', page })
  }
  useEffect(() => {
    dispatch({ type: 'LOAD_STARSHIPS_DATA' })
  }, [])
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name', responsive: ['lg'] },
    { title: 'Model', dataIndex: 'model', key: 'model' },
    { title: 'Crew', dataIndex: 'crew', key: 'crew' },
    { title: 'Class', dataIndex: 'starship_class', key: 'starship_class' },
    {
      title: 'Created',
      dataIndex: 'created',
      key: 'created',
      responsive: ['md'],
    },
    { title: 'Edited', dataIndex: 'edited', key: 'edited' },
  ]
  let pagination = {
    onChange: (page, pageSize) => {
      addDataHandler(page)
    },
    responsive: true,
    showLessItems: true,
    size: 'default',
    position: ['topRight', 'bottomRight'],
    total: total,
    showTotal: (total, range) => `${range[0]}-${range[1]} из ${total} записей`,
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ['10', '15', '20', '25', '30'],
  }
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
        ghost={false}
        onBack={() => window.history.back()}
        title="Тест"
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
            <Space>
              <Button type="primary" onClick={addDataHandler}>
                add data
              </Button>
            </Space>
            <Table
              loading={isLoading}
              columns={columns}
              dataSource={starshipsData}
              pagination={pagination}
            />
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
export default Test
