export const initialState = {
  auth: null,
  profile: {},
  isLoading: null,
}
export const supportInitialState = {
  messages: [
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
