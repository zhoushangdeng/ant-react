import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'
import Router from './router/index.jsx'
import 'antd/dist/antd.css'
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>

        <Router></Router>
    </Provider>
)
