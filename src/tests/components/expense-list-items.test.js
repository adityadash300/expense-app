import shallow from "enzyme/build/shallow"
import React from "react"
import ExpenseListItem from "../../components/expense-list-items"
import expenses from "../fixtures/expenses"

test('should render ExpenseListItems correctly', () => {
    const wrapper = shallow(<ExpenseListItem { ...expenses[0] } />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('h3').text()).toBe(expenses[0].description)
})