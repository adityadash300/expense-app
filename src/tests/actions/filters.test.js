import moment from "moment"
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from "../../actions/filters"


test('should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sortby date action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should generate sortby amount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate text filter action object with provided text', () => {
    const action = setTextFilter('Test Text')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Test Text'
    })
})

test('should generate text filter action object with default text', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})