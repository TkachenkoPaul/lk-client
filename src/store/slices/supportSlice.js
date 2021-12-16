import { createSlice } from '@reduxjs/toolkit'
const IS_LOADING = 'IS_LOADING'
const initialState = {
  messages: [],
  isLoading: true,
}
// {
//   id: 1,
//     key: 1,
//   subject: 'Не работает интернет',
//   chapter: 'Технические вопросы',
//   date: '2021-12-13 12:34:12',
//   status: 'Открыта',
// },
// {
//   id: 2,
//     key: 2,
//   subject: 'Не работает КТВ',
//   chapter: 'Технические вопросы',
//   date: '2021-12-15 11:34:12',
//   status: 'Выполнена и закрыта',
// },
const supportSlice = createSlice({
  name: 'support ',
  initialState,
  reducers: {
    setIsLoading: state => {
      state.isLoading = true
    },
    setIsNotLoading: state => {
      state.isLoading = false
    },
    setMessages: (state, action) => {
      state.messages = action.payload
    },
  },
})
export const { setIsLoading, setIsNotLoading, setMessages } =
  supportSlice.actions
export const selectIsLoading = state => state.isLoading
export const selectMessages = state => state.messages
export default supportSlice.reducer
