import React from 'react'
import {
  List,
  Avatar,
  Comment,
  Form,
  Button,
  Input,
  Upload,
  Skeleton,
} from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import user from './user.png'
import operator from './operator.png'
import style from './Support.module.css'
import 'dayjs/locale/ru'
import { useDispatch } from 'react-redux'
import {
  getMessage,
  setMessageReply,
} from '../../store/actionCreators/SupportActionCreator'
import ScrollToBottom from 'react-scroll-to-bottom'
import ReplyFiles from './ReplyFile'

const Chat = props => {
  const dispatch = useDispatch()
  const [form] = Form.useForm()
  const getChatMessages = (msg, userId) => {
    const chatMessages = msg.msgs_reply?.map(reply => {
      const chat = {}
      chat.key = reply.id
      chat.actions =
        reply.files?.length > 1 ? [<ReplyFiles files={reply.files} />] : []
      chat.author = reply.aid
      chat.avatar = reply.aid === 'Оператор' ? operator : user
      chat.content = <p>{reply.text}</p>
      chat.datetime = reply.datetime
      return chat
    })
    chatMessages?.unshift({
      key: msg.id,
      actions: [],
      author: userId,
      avatar: user,
      content: <p>{msg.message}</p>,
      datetime: msg.date,
    })
    return chatMessages
  }
  const data = getChatMessages(props.msg, props.userId)
  const normFile = e => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }
  const onFinish = values => {
    dispatch(setMessageReply({ text: values.text, msgId: props.msg.id }))
    dispatch(getMessage(props.msg.id))
    form.resetFields()
  }
  const comments = data => {
    return data.map(item => (
      <Comment
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
          <ScrollToBottom mode={'bottom'} className={style.scrollerBox}>
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
                <Form.Item
                  name="file"
                  label=""
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  extra="Загрузите изображения ">
                  {/*TODO добавить валидацию загружаемых файлов*/}
                  <Upload
                    name="file"
                    action={`https://test.rck-api.rck.su/api/v1/msgs/${props.msg.id}/upload_file`}
                    listType="picture"
                    maxCount={20}
                    withCredentials={true}
                    headers={{
                      'Content-Type': 'multipart/form-data',
                      Accept: '*/*',
                    }}>
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
