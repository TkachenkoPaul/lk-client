import React from 'react'
import { Button, Result } from 'antd'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  const clickHAndler = () => {
    navigate('/')
  }
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="Страница не найдена"
        extra={
          <Button type="primary" onClick={clickHAndler}>
            Главная
          </Button>
        }
      />
    </>
  )
}
export default Error
