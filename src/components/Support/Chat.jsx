import 'dayjs/locale/ru'

import {
  Avatar,
  Button,
  Comment,
  Form,
  Input,
  List,
  Skeleton,
  Upload,
} from 'antd'
import {
  getMessage,
  setMessageReply,
} from '../../store/actionCreators/SupportActionCreator'

import React from 'react'
import ReplyFiles from './ReplyFile'
import ScrollToBottom from 'react-scroll-to-bottom'
import { UploadOutlined } from '@ant-design/icons'
import { locale } from 'antd/lib/locale/ru_RU'
import operator from './operator.png'
import style from './Support.module.css'
import { useDispatch } from 'react-redux'
import user from './user.png'
import { v4 as uuid } from 'uuid'

const Chat = props => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const getChatMessages = (msg, userId) => {
    console.log('get chat messages', msg)
    const chatMessages = msg.msgs_reply?.map(reply => {
      const chat = {}
      chat.key = uuid()
      chat.actions =
        reply.files?.length >= 1 ? [<ReplyFiles files={reply.files} />] : []
      chat.author = reply.aid
      chat.avatar = reply.aid === 'Оператор' ? operator : user
      chat.content = <p>{reply.text}</p>
      chat.datetime = reply.datetime
      return chat
    })
    chatMessages?.unshift({
      key: uuid(),
      actions: [],
      author: userId,
      avatar: user,
      content: <p>{msg.message}</p>,
      datetime: msg.date,
    })
    return chatMessages
  }
  const data = getChatMessages(props.msg, props.userId)
  const getFile = e => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }
  const uploadConfig = {
    name: 'file',
    beforeUpload(file) {
      return false
    },
    listType: 'picture',
    maxCount: '20',
  }
  const normFile = e => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }
  const onFinish = values => {
    console.log('values', values)
    dispatch(
      setMessageReply({
        text: values.text,
        file: values.file,
        msgId: props.msg.id,
      })
    )
    dispatch(getMessage(props.msg.id))
    form.resetFields()
  }
  const comments = data => {
    return data.map(item => (
      <Comment
        key={item.key}
        actions={item.actions}
        author={item.author}
        avatar={item.avatar}
        content={item.content}
        datetime={item.datetime}
      />
    ))
  }
  if (data) {
    return (
      <>
        <List
          className={`comment-list ${style.header}`}
          header={'Сообщения'}
          itemLayout="horizontal">
          <ScrollToBottom
            mode={'bottom'}
            className={`${style.scrollerBox} `}
            scrollViewClassName={'sc1'}>
            {comments(data)}
          </ScrollToBottom>
        </List>
        <Comment
          avatar={<Avatar src={user} alt="erem-7-001" />}
          content={
            <>
              <Form form={form} name="chat" onFinish={onFinish}>
                <Form.Item
                  name="text"
                  rules={[
                    {
                      required: true,
                      message: 'Пожалуйста, введите текст сообщения!',
                    },
                  ]}>
                  <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} />
                </Form.Item>
                <Form.Item name="file" getValueFromEvent={getFile}>
                  {/*TODO добавить валидацию загружаемых файлов*/}
                  <Upload {...uploadConfig}>
                    <Button icon={<UploadOutlined />}>
                      Нажмите для загрузки
                    </Button>
                  </Upload>
                </Form.Item>
                <Form.Item>
                  <Button htmlType="submit" type="primary">
                    Отправить
                  </Button>
                </Form.Item>
              </Form>
            </>
          }
        />
      </>
    )
  } else {
    return (
      <>
        <Skeleton avatar paragraph={{ rows: 2 }} />
        <Skeleton avatar paragraph={{ rows: 2 }} />
        <Skeleton avatar paragraph={{ rows: 2 }} />
        <Skeleton avatar paragraph={{ rows: 2 }} />
        <Skeleton avatar paragraph={{ rows: 2 }} />
      </>
    )
  }
}
export default Chat
