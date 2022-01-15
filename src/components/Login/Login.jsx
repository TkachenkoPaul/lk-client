import React, { useEffect, useState } from 'react'
import { Layout, Spin } from 'antd'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Footer from '../layout/Footer/Footer'
import logo from './logo.png'
import style from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { doGetAuthToken } from '../../store/actionCreators/AuthCationCreator'
import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'

const { Content } = Layout
const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies()
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  useEffect(() => {
    if (!!auth.error) {
      console.log('we have error message', auth.error)
    }
  }, [auth.error.code, auth.error.message])

  useEffect(() => {
    if (auth.isAuth) {
      navigate('/')
    }
  }, [auth.isAuth])
  useEffect(() => {
    // const response = authRequest('vov-10-44', 'qwerty777', {
    //   withCredentials: true,
    // })
    // console.log(response)
    // authRequest('vov-10-44', 'qwerty777', {
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   },
    // })
    //   .then(function (response) {
    //     // handle success
    //     console.log('authApi success: ', response)
    //     console.log('cookies: ', cookies)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log('authApi error: ', error.response)
    //   })
    // getUserRequest()
    //   .then(function (response) {
    //     // handle success
    //     console.log('userApi response: ', response)
    //     console.log('cookies: ', cookies)
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log('userApi error: ', error.response)
    //   })
  }, [])
  if (auth.isLoading) {
    return <Spin size="large" />
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <div className={`${style.loginBox}`}>
          <h1 className="text-center">Личный кабинет</h1>
          <img
            src={logo}
            style={{ marginBottom: '24px' }}
            className="img-fluid"
            alt="Responsive image"
          />
          <div className={style.siteLayoutContent}>
            <LoginForm />
          </div>
        </div>
      </Content>
      <Footer />
    </Layout>
  )
}

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const onFinish = values => {
    console.log('values from form: ', values)
    dispatch(doGetAuthToken(values))
  }
  return (
    <Form
      name="normal_login"
      className={style.loginForm}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}>
      <Form.Item
        autoComplete="off"
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой логин!',
          },
          {
            min: 3,
            message: 'Слишком мало символов',
          },
        ]}>
        <Input
          value={username}
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин"
          allowClear
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой пароль!',
          },
          {
            min: 6,
            message: 'Слишком мало символов',
          },
        ]}>
        <Input.Password
          value={password}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Пароль"
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={style.loginFormButton}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  )
}
export default Login
