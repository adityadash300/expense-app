import React from "react"
import { connect } from "react-redux"
import ExpenseListItem from "./expense-list-items"
import selectExpenses from "../selectors/expenses"

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No Expenses</p>
            ) : (
                props.expenses.map((expense) => <ExpenseListItem  key={expense.id} { ...expense } />)
            )
        }
    </div>
)

const mapStateToProps = ({ expenses, filters }) => ({
    expenses: selectExpenses(expenses, filters)
})

export default connect(mapStateToProps)(ExpenseList)