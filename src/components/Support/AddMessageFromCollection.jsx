import { Button, Form, Input, Modal, Upload, message } from 'antd'
import React, { useState } from 'react'

import { UploadOutlined } from '@ant-design/icons'

const AddMessageFormCollection = ({
  visible,
  onCreate,
  onCancel,
  confirmLoading,
}) => {
  //TODO добавить кнопку очистки всех полей формы
  //TODO добавить стиль к обязательным для заполнения полям

  const [form] = Form.useForm()
  const [fileList, setFileList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
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

  const getFile = e => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  const props = {
    name: 'file',
    beforeUpload(file) {
      return false
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    },
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
        <Form.Item name={'file'} getValueFromEvent={getFile}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Нажмите для загрузки</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  )
}

export { AddMessageFormCollection }
