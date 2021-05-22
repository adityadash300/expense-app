import { combineReducers, createStore, compose, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import expensesReducer from "../reducers/expenses"
import filterReducer from "../reducers/filters"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
    return createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
}