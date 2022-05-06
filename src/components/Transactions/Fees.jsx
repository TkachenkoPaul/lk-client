import { DatePicker, Divider, Table } from 'antd'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getFees } from '../../store/actionCreators/FeesActionCreator'
import moment from 'moment'

function Fees() {
  const dispatch = useDispatch()
  const reduxFees = useSelector(state => state.fees)
  const [fees, setFees] = useState(reduxFees.data)
  const [credits, setCredits] = useState(reduxFees.credits)
  const [isLoading, setIsLoading] = useState(reduxFees.isLoading)

  useEffect(() => {
    setFees(reduxFees.data)
  }, [reduxFees.data])
  useEffect(() => {
    setCredits(reduxFees.credits)
  }, [reduxFees.credits])
  useEffect(() => {
    setIsLoading(reduxFees.isLoading)
  }, [reduxFees.isLoading])
  useEffect(() => {
    dispatch(
      getFees(
        moment().startOf('month').format('YYYY-MM-DD'),
        moment().endOf('month').format('YYYY-MM-DD')
      )
    )
  }, [])

  const getFeesFromStore = (credits, fees) => {
    if (!!credits || !!fees) {
      return [...credits, ...fees]
    }
    return null
  }
  function onChange(dates, dateStrings) {
    if (dateStrings[0] && dateStrings[1]) {
      dispatch(getFees(dateStrings[0], dateStrings[1]))
    }
  }
  const columns = [
    {
      title: '#',
      dataIndex: 'id',
      key: 'id',
      responsive: ['lg'],
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Дата',
      dataIndex: 'date',
      key: 'date',
      defaultSortOrder: 'descend',
      sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
    },
    { title: 'Сумма, руб.', dataIndex: 'sum', key: 'sum' },
    {
      title: 'Депозит, руб.',
      dataIndex: 'last_deposit',
      key: 'last_deposit',
      responsive: ['md'],
    },
  ]
  const ranges = {
    Сегодня: [moment(), moment()],
    '30 дней': [moment().subtract(1, 'month'), moment()],
    Год: [moment().subtract(12, 'month'), moment()],
    Все: [moment('2016-01-01'), moment()],
  }
  return (
    <>
      <Divider orientation="left">Снятия</Divider>
      <DatePicker.RangePicker
        ranges={ranges}
        onChange={onChange}
        style={{ marginBottom: '12px' }}
      />
      <Table
        loading={isLoading}
        hasData={!!fees}
        columns={columns}
        dataSource={getFeesFromStore(credits, fees)}
      />
    </>
  )
}

export default Fees
