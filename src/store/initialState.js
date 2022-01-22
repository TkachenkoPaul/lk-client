export const initialState = {
  auth: null,
  profile: {},
  isLoading: null,
}
export const supportInitialState = {
  messages: [
    {
      id: Date.now(),
      key: Date.now(),
      subject: 'Не работает интернет',
      chapter: 'Технические вопросы',
      date: '2021-12-13 12:34:12',
      status: 'Открыта',
    },
    {
      id: Date.now(),
      key: Date.now(),
      subject: 'Не работает КТВ',
      chapter: 'Технические вопросы',
      date: '2021-12-15 11:34:12',
      status: 'Выполнена и закрыта',
    },
  ],
  isLoading: true,
}
export const profileInitialState = {
  data: {},
  isLoading: false,
  isLoaded: false,
  isDebtor: false,
}
export const authInitialState = {
  token: null,
  isLoading: false,
  isAuth: false,
  error: {},
}
export const paymentsInitialState = {
  isLoading: false,
  data: [],
}
export const testInitialState = {
  starships: {
    total: 0,
    isLoading: false,
    data: [],
  },
}
