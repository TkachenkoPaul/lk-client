import React, { useState } from 'react'
import {
  Space,
  List,
  Avatar,
  Comment,
  Image,
  Form,
  Button,
  Input,
  Upload,
} from 'antd'
import {
  UploadOutlined,
} from '@ant-design/icons'
import user from './user.png'
import operator from './operator.png'
import moment from 'moment'
import style from './Support.module.css'
import dayjs from 'dayjs'
import RelativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/ru'

const Chat = (props) => {
  console.log('chat props :', props)
  dayjs.extend(RelativeTime)
  dayjs.locale('ru')
  let a = dayjs('2021-11-24 14:34:45')
  console.log('a', a.fromNow())
  const getChatMessages = (msg,userId) => {
    const chatMessages = msg.msgs_reply?.map(reply =>{
      const chat = {}
      chat.key = reply.id
      chat.actions = []
      chat.author = reply.aid
      chat.avatar = reply.aid ==='Оператор' ? operator : user
      chat.content = <p>{reply.text}</p>
      chat.datetime = reply.datetime
      return chat
    })
    chatMessages?.unshift({
      key: msg.id,
      actions : [],
      author : userId,
      avatar: user,
      content: <p>{msg.message}</p>,
      datetime : msg.date,
    })
    return chatMessages
  }
  const replies = getChatMessages(props.msg,props.userId)
  console.log('replies12: ', replies)
  const normFile = e => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }
  return (
    <>
      <List
        className={`comment-list ${style.header}`}
        header={'Сообщения'}
        itemLayout="horizontal"
        dataSource={getChatMessages(props.msg,props.userId)}
        renderItem={item => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <Comment
        avatar={<Avatar src={user} alt="erem-7-001" />}
        content={
          <>
            <Form.Item>
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item
              name="upload"
              label=""
              valuePropName="fileList"
              getValueFromEvent={normFile}
              extra="Загрузите изображения ">
              <Upload name="logo" action="/" listType="picture">
                <Button icon={<UploadOutlined />} type="primary">
                  Нажмите для загрузки
                </Button>
              </Upload>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit" type="primary">
                Отправить
              </Button>
            </Form.Item>
          </>
        }
      />
    </>
  )
}
export default Chat
