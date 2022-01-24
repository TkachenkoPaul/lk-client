import React from 'react'
import ReactDOM from 'react-dom'
import { ConfigProvider } from 'antd'
import locale from 'antd/lib/locale/ru_RU'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CookiesProvider } from 'react-cookie'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store/store'
import moment from 'moment'
import 'moment/locale/ru'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={locale}>
        <CookiesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CookiesProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log)
