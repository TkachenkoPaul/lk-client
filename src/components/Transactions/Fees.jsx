import React, { useEffect, useState } from 'react'
import { DatePicker, Divider, Space, Table } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getFees } from '../../store/actionCreators/FeesActionCreator'
import moment from 'moment'

function Fees(props) {
  const dispatch = useDispatch()
  const reduxFees = useSelector(state => state.fees)
  const [fees, setFees] = useState(reduxFees.data)
  const [isLoading, setIsLoading] = useState(reduxFees.isLoading)

  useEffect(() => {
    setFees(reduxFees.data)
  }, [reduxFees.data])

  console.log('redux fees',reduxFees)
  console.log('select fees',fees)

  function onChange(dates, dateStrings) {
    //TODO закончить обработку выбора даты
    if (dateStrings[0] && dateStrings[1]) {
      dispatch(getFees(dateStrings[0],dateStrings[1]))
    }
  }
  const columns = [
    { title: '#', dataIndex: 'id', key: 'id', responsive: ['lg'] },
    { title: 'Дата', dataIndex: 'date', key: 'date' },
    { title: 'Сумма', dataIndex: 'sum', key: 'sum' },
    { title: 'Депозит', dataIndex: 'last_deposit', key: 'last_deposit', responsive: ['md'] },
    {
      title: 'Вид операции',
      dataIndex: 'method',
      key: 'id',
      responsive: ['md'],
    },
  ]
  return (
    <>
      <Divider orientation="left">Снятия</Divider>
      <DatePicker.RangePicker ranges={{
        'Сегодня': [moment(), moment()],
        'Месяц': [moment().startOf('month'), moment().endOf('month')],
        'Custom': [moment('2016-01-01'), moment('2017-01-01')],
        '2016': [moment('2016-01-01'), moment()],
      }} onChange={onChange} style={{marginBottom:'12px'}}/>
      <Table
          loading={isLoading}
          hasData={!!fees}
          columns={columns}
          dataSource={fees ? fees : null}
        />
    </>
  )
}

export default Fees