import React from "react"
import moment from "moment"
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { SingleDatePicker } from "react-dates"


export default class ExpenseForm extends React.Component {
    state = {
        description: this.props.expense ? this.props.expense.description : '',
        note: this.props.expense ? this.props.expense.note : '',
        amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
        createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
        calendarFocused: false,
        error: ''
    }

    onTextChange = (e) => {
        const text = e.target.value
        e.target.name === 'note' ? (
            this.setState(() => ({ note: text }))
        ) : (
            this.setState(() => ({ description: text }))
        )
    }

    onAmountChange = (e) => {
        const amount = e.target.value

        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }

    onDateChange = (createdAt) => {
        if (createdAt) {    
             this.setState(() => ({ createdAt }))
        }
    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if(!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide description and amount' }))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }

    render() {
        return (
                <form className="form" onSubmit={this.onSubmit}>
                    {this.state.error &&  <p className="form__error">{this.state.error}</p>}
                    <input 
                        type="text"
                        name="description"
                        placeholder="Description"
                        autoFocus={true}
                        value={this.state.description}
                        onChange={this.onTextChange}
                        className="text-input"
                    />
                    <input 
                        type="number"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                        className="text-input"
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        name="note"
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onTextChange}
                        className="textarea"
                    >
                    </textarea>
                    <div>
                        <button className="button">
                            Save Expense
                        </button>
                    </div>
                </form>
        )
    }
}