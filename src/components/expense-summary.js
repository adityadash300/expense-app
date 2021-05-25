import numeral from "numeral"
import React from "react"
import { connect } from "react-redux"
import selectExpenseTotal from "../selectors/expenses-total"
import selectExpenses from "../selectors/expenses"
import { Link } from "react-router-dom"

export const ExpensesSumary = ({ expensestotal, expensesCount }) => {
    const expensesWord = expensesCount === 1 ? 'expense' : 'expenses'
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title"> 
                    Viewing <span>{expensesCount} </span>{expensesWord} totalling <span>{numeral(expensestotal / 100).format('$0,0.00')}</span>
                </h1>
                <div className="page-header__action">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>
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