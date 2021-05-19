
import { combineReducers, createStore } from "redux"
import uuid from "uuid"

// Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt }) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

// Set text filter
const setTextFilter = (text = '') => {
    // console.log(text)
    return {
        type: 'SET_TEXT_FILTER',
        text 
    }
}

// Sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// Sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})


// Set start date
const setStartDate = (startDate) => ({
    type:'SET_START_DATE',
    startDate
})

// Set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

// Expense Reducer

const expenseReducerDefaultState = []

const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {...expense, ...action.updates}
                }else {
                    return expense
                }
            })
        default:
            return state
    }
}

// Filters Reducer 

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            // console.log(action.text)
            return { ...state, text: action.text }
        case 'SORT_BY_DATE':
            return { ...state, sortBy: 'date' }
        case 'SORT_BY_AMOUNT':
            return { ...state, sortBy: 'amount' }
        case 'SET_START_DATE':
            return { ...state, startDate: action.startDate }
        case 'SET_END_DATE':
            return { ...state, endDate: action.endDate }
        default:
            return state
    }
}

// Store Creation

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    console.log(text)


    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase())
        console.log(expense.description, textMatch)

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return b.createdAt - a.createdAt
        } else {
            return b.amount - a.amount
        }
    })
}

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer
    })
)

const unsubscribe = store.subscribe(() => {
    const { expenses, filters } = store.getState()
    const visibleExpenses = getVisibleExpenses(expenses, filters)
    console.log(visibleExpenses)
})

const expenseOne = store.dispatch(addExpense({ description: 'Rent on today', note: 'Double rent', amount: 20000, createdAt: 21000 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Having Coffee', note: 'Costly', amount: 300, createdAt: 6910948 }))
store.dispatch(addExpense({ description: 'Birthday Bash', note: 'Shared', amount: 1000, createdAt: -1000 }))
store.dispatch(addExpense({ description: 'Milk expense', note: 'The milkman took advanced for next month', amount: 100, createdAt: -50000 }))
// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }))

store.dispatch(setTextFilter('birthday'))
// store.dispatch(setTextFilter())

// store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(-1125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate())

// console.log(store.getState());
console.log("EOL")

const demoState = {
    expenses: [{
        id: 'hbfpadhfajsd',
        description: 'January Rent',
        note: 'This was the final payment for the address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount,
        startDate: undefined,
        endDate: undefined
    }
}