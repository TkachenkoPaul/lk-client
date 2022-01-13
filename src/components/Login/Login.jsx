import React, { useState } from 'react'
import { Layout, Spin } from 'antd'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Footer from '../layout/Footer/Footer'
import logo from './logo.png'
import style from './Login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  doAuthUser,
  doGetAuthToken,
} from '../../store/actionCreators/AuthCationCreator'
import { GET_AUTH_TOKEN } from '../../store/actions/AuthActions'
import axios from 'axios'

const { Content } = Layout
const Login = () => {
  const auth = useSelector(state => state.auth)
  if (auth.loading) {
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
  const dispatch = useDispatch()
  const onFinish = values => {
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
