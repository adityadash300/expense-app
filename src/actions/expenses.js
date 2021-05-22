import database from "../firebase/firebase"

// Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
})

export const startAddExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => {
    return async (dispatch) => {
        const expense = { description, note, amount, createdAt }
        try {
            const ref = await database.ref('expenses').push(expense)
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        } catch (error) {
            console.log('Could not connect to database', error)
        }
    }
}

// Remove Expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
})
// Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

