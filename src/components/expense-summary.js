import numeral from "numeral"
import React from "react"
import { connect } from "react-redux"
import selectExpenseTotal from "../selectors/expenses-total"
import selectExpenses from "../selectors/expenses"

export const ExpensesSumary = ({ expensestotal, expensesCount }) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses'
    return (
        <div>
            <h1> 
                Viewing {expensesCount} {expensesWord} totalling {numeral(expensestotal / 100).format('$0,0.00')}
            </h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expensesCount: visibleExpenses.length,
        expensestotal: selectExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSumary)