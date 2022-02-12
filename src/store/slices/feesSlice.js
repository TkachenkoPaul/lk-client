import { createSlice } from '@reduxjs/toolkit'
import { feesInitialState } from '../initialState'
import dayjs from 'dayjs'

const setFeesWithInfo = fees => {
  return fees.map(fee => {
    fee.key = fee.id
    fee.date = dayjs(fee.date).format('YYYY-MM-DD')
    fee.last_deposit = parseFloat(fee.last_deposit)
    fee.sum = parseFloat(fee.sum)
    switch (fee.method) {
      case 0:
        fee.method = 'Одноразово'
        break
      case 1:
        fee.method = 'Периодические платежи'
        break
      case 2:
        fee.method = 'Пеня'
        break
      case 3:
        fee.method = 'Активация'
        break
      case 4:
        fee.method = 'Перевод личных средств'
        break
    }
    return fee
  })
}
const setCreditsWithInfo = credits => {
  return credits.map(credit => {
    credit.key = credit.id
    credit.date = dayjs(credit.datetime).format('YYYY-MM-DD HH:mm:ss')
    credit.method = 'Кредит'
    credit.last_deposit = 'Кредит'
    credit.sum = 'Кредит'
    return credit
  })
}
const feesSlice = createSlice({
  name: 'fees',
  initialState: feesInitialState,
  reducers: {
    setFees: (state, action) => {
      state.data = setFeesWithInfo(action.payload)
    },
    setCredits: (state, action) => {
      state.credits = setCreditsWithInfo(action.payload)
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
  },
})
export const { setFees, setCredits, setLoading, setLoaded } = feesSlice.actions
export default feesSlice.reducer
