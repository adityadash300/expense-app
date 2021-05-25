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
                <div className="page-header">
                    <div className="content-container">
                        <h1>Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                    <ExpenseForm 
                        expense={this.props.expense}
                        onSubmit={this.onSubmit}
                    />
                    <button
                        className="button button--secondary"
                        onClick={this.onRemove}
                    >
                        Remove Expense
                    </button>
                </div>
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