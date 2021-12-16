import { createSlice } from '@reduxjs/toolkit'
const initialState = [
  {
    information: {
      id: 34344,
      key: 34344,
      login: 'erem-7-001',
      name: 'Тесторов Тестетор Тесторович',
      addressStreet: 'улица Шевченко Т.Г.',
      addressBuild: '4',
      addressFlat: '123',
      passportGrant: 'Ленинским РО УМВД Украины в Луганской области',
      passportNumber: 'ЕК 141029',
      passportDate: '2021-02-01',
      phoneNumber: { main: '0720000000', second: '0660000000' },
      contract: { id: '031111', date: '2021-11-21' },
      registration: '2021-02-11',
      activation: '2021-02-11',
      deposit: '120',
      tariff: {
        name: 'Интернет 100 + IPTV + Кабельное ТВ',
        status: 'Активно',
        dayFee: '12.5',
      },
    },
  },
]
const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
})
export default profileSlice.reducer
