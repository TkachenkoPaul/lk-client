export const initialState = {
  auth: null,
  profile: {},
  isLoading: null,
}
export const supportInitialState = {
  messages: [
  ],
  message: {
    isLoading: false,
    data: {}
  },
  isLoading: true,
  error: {
    code: '',
    message: ''
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
    0:'Открыта',
    1:'Не выполнена и закрыта',
    2:'Выполнена и закрыта',
    3:'В обработке',
    4:'Новое сообщение',
    5:'Приостановление',
    6:'Ждем ответа от пользователя',
    7:'Делигировано',
    8:'Ответственный',
  }
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
export const feesInitialState = {
  isLoading: false,
  data: [],
  credits: [],
}
export const testInitialState = {
  starships: {
    total: 0,
    isLoading: false,
    data: [],
  },
}
