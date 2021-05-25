import 'regenerator-runtime/runtime'
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import AppRouter, { history } from "./routers/app-router"
import configureStore from "./store/configure_store"
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import  "./firebase/firebase"
import { startSetExpenses } from './actions/expenses'
import { firebase } from "./firebase/firebase"
import { login, logout } from './actions/auth'
import LoadingPage from "./components/loading-page"


console.log('Expensify Server Running')

const store = configureStore()
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}

ReactDOM.render(<LoadingPage />, document.getElementById('app'))



firebase.auth().onAuthStateChanged( async user => {
    if (user) {
        renderApp()
        store.dispatch(login(user.uid))
        await store.dispatch(startSetExpenses())
        if (history.location.pathname === '/') {
            history.push('/dashboard')
        }
    } else {
        renderApp()
        store.dispatch(logout())
        history.push('/')
    }
})
