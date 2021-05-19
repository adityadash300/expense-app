import { shallow } from "enzyme";
import React from "react"
import ReactShallowRenderer from "react-test-renderer/shallow"
import Header from "../../components/header";

test('should render Header correctly', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot ()
})




























test('Dummy Test', () => {
    expect(101).toBe(101)
})