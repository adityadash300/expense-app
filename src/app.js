import 'regenerator-runtime/runtime'
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter from "./routers/app-router"
import configureStore from "./store/configure_store"
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import  "./firebase/firebase"
import { startSetExpenses } from './actions/expenses'


console.log('Expensify Server Running')

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(<p>Loading.....</p>, document.getElementById('app'))

store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'))
}).catch( e => {
    ReactDOM.render(<p>Something Went Wrong!!.Please try reloading the web page</p>, document.getElementById('app'))
}) 