import './index.css'
import 'moment/locale/ru'

import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { CookiesProvider } from 'react-cookie'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import locale from 'antd/lib/locale/ru_RU'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <ConfigProvider locale={locale}>
      <CookiesProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookiesProvider>
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log)
