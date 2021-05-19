import React from "react"
import { connect } from "react-redux"
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../actions/filters"
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'
import { DateRangePicker } from "react-dates"

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }

    onOptionChange = (e) => {
        e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount()
    }

    render() {
        return (
            <div>
                <input 
                    type="text" 
                    value={this.props.filters.text}
                    onChange={this.onTextChange}
                />
                <select 
                    id="sortby-option"
                    value={this.props.filters.sortBy}
                    onChange={this.onOptionChange}
                >
                    <option value='date'>Date</option>
                    <option value='amount'>Amount</option>
                </select>
                {this.props.filters.sortBy === 'date' && <DateRangePicker 
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    showClearDates={true}
                    isOutsideRange={() => false}
                />}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: text => dispatch(setTextFilter(text)),
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: date => dispatch(setStartDate(date)),
    setEndDate: date => dispatch(endDate(date))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)