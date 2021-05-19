import shallow from "enzyme/build/shallow"
import React from "react"
import NotFoundPage from "../../components/not-found-page"

test('should render NotFoundPage correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(wrapper).toMatchSnapshot()
})