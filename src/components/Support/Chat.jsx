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
  Upload, Skeleton, Divider,
} from 'antd'
import {
  UploadOutlined,
} from '@ant-design/icons'
import user from './user.png'
import operator from './operator.png'
import style from './Support.module.css'
import 'dayjs/locale/ru'
import { useDispatch } from 'react-redux'
import { getMessage, setMessageReply } from '../../store/actionCreators/SupportActionCreator'
import ScrollToBottom from 'react-scroll-to-bottom';

const Chat = (props) => {
  console.log(props)
  const dispatch = useDispatch()
  const [form] = Form.useForm()
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
  const data = getChatMessages(props.msg,props.userId)
  const normFile = e => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }
  const onFinish = (values) => {
    dispatch(setMessageReply({ text:values.text , msgId:props.msg.id}))
    dispatch(getMessage(props.msg.id))
    form.resetFields()
    console.log('values: ',values)
  }
  console.log('data:',data)
  // actions: [
  //   <Image
  //     height={100}
  //     src="https://rck.su/media/uploads/2021/12/13/screenshot_4.png"
  //     fallback="data:image/png;base64,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"
  //   />,
  // ],
  if (data){
    return  (
        <>
          <List
            className={`comment-list ${style.header}`}
            header={'Сообщения'}
            itemLayout="horizontal"
          >
            <ScrollToBottom mode={'bottom'} className={style.scrollerBox} >
            {data.map(item => (
                <Comment
                  actions={item.actions}
                  author={item.author}
                  avatar={item.avatar}
                  content={item.content}
                  datetime={item.datetime}
                />
            ))}
            </ScrollToBottom>
          </List>
          {/*<ScrollToBottom className={style.scrollerBox}>*/}
          {/*  <List*/}
          {/*    className={`comment-list ${style.header}`}*/}
          {/*    header={'Сообщения'}*/}
          {/*    itemLayout="horizontal"*/}
          {/*    dataSource={getChatMessages(props.msg,props.userId)}*/}
          {/*    renderItem={item => (*/}
          {/*      <li>*/}
          {/*        <Comment*/}
          {/*          actions={item.actions}*/}
          {/*          author={item.author}*/}
          {/*          avatar={item.avatar}*/}
          {/*          content={item.content}*/}
          {/*          datetime={item.datetime}*/}
          {/*        />*/}
          {/*      </li>*/}
          {/*    )}*/}
          {/*  />*/}
          {/*</ScrollToBottom>*/}
          <Comment
            avatar={<Avatar src={user} alt="erem-7-001" />}
            content={
              <>
                <Form
                  form={form}
                  name="chat"
                  onFinish={onFinish}>
                <Form.Item name='text' rules={[
                  {
                    required: true,
                    message: 'Пожалуйста, введите текст сообщения!',
                  },
                ]}>
                  <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }}  />
                </Form.Item>
                <Form.Item
                  name="upload"
                  label=""
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="Загрузите изображения ">
                  {/*TODO добавить валидацию загружаемых файлов*/}
                  <Upload name="logo" action="/test" listType="picture">
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
                </Form>
              </>
            }
          />
        </>
    )
  } else {
    return  (<>
      <Skeleton avatar paragraph={{ rows: 2 }} />
      <Skeleton avatar paragraph={{ rows: 2 }} />
      <Skeleton avatar paragraph={{ rows: 2 }} />
      <Skeleton avatar paragraph={{ rows: 2 }} />
      <Skeleton avatar paragraph={{ rows: 2 }} />
    </>)
  }
}
export default Chat
