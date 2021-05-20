import { combineReducers, createStore, compose } from "redux"
import expensesReducer from "../reducers/expenses"
import filterReducer from "../reducers/filters"

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer
        }),
        enhancers
    )
        
    return store
}