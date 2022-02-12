import { Form, Input, Modal } from 'antd'
import React from 'react'

const AddMessageFormCollection = ({
  visible,
  onCreate,
  onCancel,
  confirmLoading,
}) => {
  //TODO добавить кнопку очистки всех полей формы
  //TODO добавить стиль к обязательным для заполнения полям

  const [form] = Form.useForm()
  const onOk = () => {
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
      title="Создать новую заявку"
      okText={'Создать'}
      cancelText={'Закрыть'}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      onOk={onOk}>
      <Form form={form} layout={'vertical'} name={'createMessageFrom'}>
        <Form.Item
          name={'subject'}
          label="Тема заявки"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, заполните поле!',
            },
          ]}>
          <Input />
        </Form.Item>
        <Form.Item
          name={'message'}
          label="Сообщение"
          rules={[
            {
              required: true,
              message: 'Пожалуйста, опишите свою проблему!',
            },
          ]}>
          <Input.TextArea showCount rows={4} />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export { AddMessageFormCollection }
