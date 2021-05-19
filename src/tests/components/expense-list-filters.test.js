
import { shallow } from "enzyme"
import React from "react"
import { ExpenseListFilters } from "../../components/expense-list-filters"
import { altFilters, filters } from "../fixtures/filters";

let wrapper, setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
           filters={filters}
           setTextFilter={setTextFilter}
           sortByDate={sortByDate}
           sortByAmount={sortByAmount}
           setStartDate={setStartDate}
           setEndDate={setEndDate} 
        />)
})

test('should render ExpenseListFilters page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilters with alt filters correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const value = 'rent'
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('should handle sortby value change to date', () => {
    wrapper.setProps({
        filters: altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value: 'date' }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('should handle sortby value change to amount', () => {
    wrapper.find('select').simulate('change', {
        target: { value: 'amount' }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle onDatesChange', () => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    })
    expect(setStartDate).toHaveBeenCalledWith(altFilters.startDate)
    expect(setEndDate).toHaveBeenCalledWith(altFilters.endDate)
})

test('should handle Focus Change', () => {
    const focus = true
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(focus)
    expect(wrapper.state('calendarFocused')).toBe(true)
})