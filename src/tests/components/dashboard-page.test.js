import shallow from "enzyme/build/shallow"
import React from "react"
import ExpenseDashboardPage from "../../components/dashboard-page"

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />)
    expect(wrapper).toMatchSnapshot()
})