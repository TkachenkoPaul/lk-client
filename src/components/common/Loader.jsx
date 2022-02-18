import React from 'react'
import { Spin } from 'antd'
import style from './Loader.module.css'

const Loader = () => {
  return (
    <div className={`${style.example}`}>
      <Spin tip="Загрузка..." />
    </div>
  )
}

export default Loader
