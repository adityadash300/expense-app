import database from "../firebase/firebase"

// Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        const expense = { description, note, amount, createdAt }
        try {
            const ref = await database.ref(`users/${uid}/expenses`).push(expense)
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        } catch (error) {
            console.log('Could not connect to database', error)
        }
    }
}

// Fetch Expense
export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    const expenses = []
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        try {
            const snapshot = await database.ref(`users/${uid}/expenses`).once('value')
            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setExpenses(expenses))
        } catch (error) {
            console.log(error)
        }
    }
}

// Remove Expense
export const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({ id } = {}) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        try {
            await database.ref(`users/${uid}/expenses/${id}`).remove()
            dispatch(removeExpense({ id }))
        } catch (error) {
            console.log(error)
        }
    }
}

// Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.uid
        try {
            await database.ref(`users/${uid}/expenses/${id}`).update(updates)
            dispatch(editExpense(id, updates))
        } catch (error) {
            console.log(error)
        }
    }
}