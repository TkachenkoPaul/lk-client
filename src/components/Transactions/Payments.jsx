import { Divider, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPayments } from '../../store/actionCreators/PaymentsActionCreator'

const Payments = ({}) => {
  const dispatch = useDispatch()
  const paymentsPage = useSelector(state => state.payments)
  const [payments, setPayments] = useState(paymentsPage.data)
  const [isLoading, setIsLoading] = useState(paymentsPage.isLoading)
  useEffect(() => {
    dispatch(getPayments())
  }, [])
  useEffect(() => {
    setPayments(paymentsPage.data)
  }, [paymentsPage.data])
  useEffect(() => {
    setIsLoading(paymentsPage.isLoading)
  }, [paymentsPage.isLoading])

  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Сумма, руб.', dataIndex: 'amount', key: 'amount' },
    { title: 'Депозит, руб.', dataIndex: 'last_deposit', key: 'dep' },
  ]
  return (
    <>
      <Divider orientation="left">Последняя оплата</Divider>
      <Table
        loading={isLoading}
        columns={columns}
        dataSource={payments ? payments : null}
        pagination={false}
      />
    </>
  )
}

export default Payments
