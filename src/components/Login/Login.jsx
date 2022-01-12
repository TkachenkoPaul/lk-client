import React from 'react'
import { Layout } from 'antd'
import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Footer from '../layout/Footer/Footer'
import logo from './logo.png'
import style from './Login.module.scss'

const { Content } = Layout
const Login = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Content>
        <div className={style.loginBox}>
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
  const onFinish = values => {
    console.log('Received values of form: ', values)
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
        name="username"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой логин!',
          },
        ]}>
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Пожалуйста, введите свой пароль!',
          },
        ]}>
        <Input
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
