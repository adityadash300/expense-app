import React from "react"
import { connect } from "react-redux"
import { startEditExpense, startRemoveExpense } from "../actions/expenses"
import ExpenseForm from "./expense-form"

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(expense)
        this.props.history.push('/')
    }

    onRemove = () => {
        this.props.startRemoveExpense()
        this.props.history.push('/')
    }
    
    render() {
        return (
            <div>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button
                    onClick={this.onRemove}
                >
                    Remove Expense
                </button>
            </div>
        ) 
    }
}

const mapStateToProps = (state, props) => ({
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
})

const mapDispatchToProps = (dispatch, ownprops) => ({
    startEditExpense: (expense) => dispatch(startEditExpense(ownprops.match.params.id, expense)),
    startRemoveExpense: () => dispatch(startRemoveExpense({ id: ownprops.match.params.id }))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)