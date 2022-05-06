export const initialState = {
  auth: false,
  profile: {},
  isLoading: null,
}
export const supportInitialState = {
  messages: [],
  message: {
    isLoading: false,
    data: {},
  },
  newMessage: {
    isLoading: false,
    isAdded: false,
    files: [],
  },
  newMessageFileIsLoading: false,
  isLoading: false,
  error: {
    code: '',
    message: '',
  },
  chapters: {
    4: 'Технические вопросы',
    5: 'Финансовые вопросы',
    6: 'Маркетинг',
    7: 'Заявки на отключение',
    8: 'Тех. аудит',
    9: 'Повторная активация',
  },
  messageStatus: {
    0: 'Открыта',
    1: 'Не выполнена и закрыта',
    2: 'Выполнена и закрыта',
    3: 'В обработке',
    4: 'Новое сообщение',
    5: 'Приостановление',
    6: 'Ждем ответа от пользователя',
    7: 'Делигировано',
    8: 'Ответственный',
  },
}
export const profileInitialState = {
  data: {},
  credit: {
    isVisible: false,
    disabled: false,
    error: null,
  },
  isLoading: false,
  isLoaded: false,
  isDebtor: false,
  tariffStates: {
    0: 'Активно',
    1: 'Отключено',
    2: 'Не активизирован',
    3: 'Приостановление',
    4: 'Отключено: Неуплата',
    5: 'Слишком маленький депозит',
  },
  tariffs: {
    withKtv: [20, 30, 308, 309, 314, 316, 318],
    withInet: {
      1000: [317, 318],
      500: [316, 315],
      250: [314, 313],
      100: [10, 11, 30],
      10: [306, 308],
      2: [307, 309],
    },
  },
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
export const feesInitialState = {
  isLoading: false,
  data: [],
  credits: [],
}
export const servicesInitialState = {
  isLoading: false,
  data: [],
}
export const errorsInitialState = {
  isErrors: false,
  errors: {},
}
export const testInitialState = {
  starships: {
    total: 0,
    isLoading: false,
    data: [],
  },
}
