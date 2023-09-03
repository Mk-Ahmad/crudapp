import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import App from './App'
import UsersReducers from './UsersReducers'

const store = configureStore({
  reducer : {
    users: UsersReducers
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
  <Provider store = {store}>
  <App />
  </Provider>
   
  </React.StrictMode>,
)
