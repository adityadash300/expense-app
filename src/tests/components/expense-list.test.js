import { shallow } from "enzyme"
import React from "react"
import expenses from "../fixtures/expenses"
import { ExpenseList } from "../../components/expense-list";

test('should render ExpenseList with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseList with empty message', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot( )
})