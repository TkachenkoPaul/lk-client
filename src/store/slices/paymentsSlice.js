import { createSlice } from '@reduxjs/toolkit'
import { paymentsInitialState } from '../initialState'
import dayjs from 'dayjs'

const setPaymentsInformation = payments => {
  return payments.map(payment => {
    try {
      payment.key = payment.id
      payment.amount = parseFloat(payment.amount)
      payment.last_deposit = parseFloat(payment.last_deposit)
      payment.date = dayjs(payment.date).format('YYYY-MM-DD HH:mm:ss')
      switch (payment.method) {
        case 0:
          payment.method = 'Юниты'
          break
        case 1:
          payment.method = 'Банк'
          break
        case 2:
          payment.method = 'Внешние платежи'
          break
        case 3:
          payment.method = 'Credit card'
          break
        case 4:
          payment.method = 'Бонус'
          break
        case 5:
          payment.method = 'Корректировка'
          break
        case 6:
          payment.method = 'Компенсация'
          break
        case 7:
          payment.method = 'Перевод личных средств'
          break
        case 8:
          payment.method = 'Пересчитать'
          break
        case 63:
          payment.method = 'Почта ЛНР'
          break
        case 103:
          payment.method = 'Банк ЛНР'
          break
        case 200:
          payment.method = 'Luga Pay'
          break
        case 201:
          payment.method = 'Box Pay'
          break
        case 202:
          payment.method = '24NonStop'
          break
        case 203:
          payment.method = 'City Pay'
          break
        case 204:
          payment.method = '24NonStop2'
          break
        case 205:
          payment.method = '24NonSto3'
          break
        case 206:
          payment.method = '24NonStop4'
          break
        default:
          payment.method = 'Undefined payment method'
      }
      return payment
    } catch (e) {
      console.log('payments map error', e)
    }
    return payment
  })
}

const paymentsSlice = createSlice({
  name: 'payments',
  initialState: paymentsInitialState,
  reducers: {
    setPayments: (state, action) => {
      state.data = setPaymentsInformation([action.payload.data])
    },
    setLoading: state => {
      state.isLoading = true
    },
    setLoaded: state => {
      state.isLoading = false
    },
  },
})
export const { setPayments, setLoading, setLoaded } = paymentsSlice.actions
export default paymentsSlice.reducer
