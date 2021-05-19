import shallow from "enzyme/build/shallow"
import React from "react"
import { EditExpensePage } from "../../components/edit-page"
import expenses from "../fixtures/expenses"

let wrapper, editExpense, removeExpense, history

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage history={history} editExpense={editExpense} removeExpense={removeExpense} expense={expenses[1]} />)
})

test('should render EditExpensePage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onRemove', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenCalledWith()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenCalledWith(expenses[0])
})