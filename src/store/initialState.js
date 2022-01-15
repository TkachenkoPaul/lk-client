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
  information: {
    data: {
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
    isLoading: false,
  },
  data: {},
  isLoading: false,
  isDebtor: false,
}
export const authInitialState = {
  token: null,
  isLoading: false,
  isAuth: false,
  error: {},
}
export const testInitialState = {
  starships: {
    total: 0,
    isLoading: false,
    data: [],
  },
}
