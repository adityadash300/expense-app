import moment from "moment"
import filterReducer from "../../reducers/filters"

test('should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toEqual('amount')
})

test('should set sortBy to date', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_DATE' })
    expect(state.sortBy).toEqual('date')
})

test('should set text filter', () => {
    const test = 'Test Text'
    const state = filterReducer(undefined, { type: 'SET_TEXT_FILTER', text: test })
    expect(state.text).toBe(test)
})

test('should set startDate filter', () => {
    const testDate = moment(0).add(4, 'years').valueOf()
    const state = filterReducer(undefined, { type: 'SET_START_DATE', startDate: testDate })
    expect(state.startDate).toBe(testDate)
})

test('should set endDate filter', () => {
    const testDate = moment(0).subtract(4, 'years').valueOf()
    const state = filterReducer(undefined, { type: 'SET_END_DATE', endDate: testDate })
    expect(state.endDate).toBe(testDate)
})












test('dummy test case', () => {
    expect(1).toBe(1)
})
