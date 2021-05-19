import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter from "./routers/app-router"
import configureStore from "./store/configure_store"
import 'normalize.css/normalize.css'
import './styles/styles.scss'


console.log('Expensify Server Running')

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))