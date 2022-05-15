/*
 * @Author: Andrew Q
 * @Date: 2022-05-14 17:25:47
 * @LastEditors: Andrew Q
 * @LastEditTime: 2022-05-15 18:54:44
 * @Description: main
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import 'uno.css'
import App from './App'
import './index.css'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
