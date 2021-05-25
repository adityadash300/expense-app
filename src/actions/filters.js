// Set text filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// Sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// Sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})


// Set start date
export const setStartDate = (startDate = moment().startOf('month')) => ({
    type:'SET_START_DATE',
    startDate
})

// Set end date
export const setEndDate = (endDate = moment().endOf('month')) => ({
    type: 'SET_END_DATE',
    endDate
})
