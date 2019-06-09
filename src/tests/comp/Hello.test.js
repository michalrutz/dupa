import React from "react";
import ReactShallowRendere from "react-test-renderer/shallow";
import Hello from "../../comp/Hello";
import { shallow } from "enzyme";

test("render Hello", ()=> {
    const renderer = new ReactShallowRendere();
    renderer.render(<Hello />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();    
})

test("render Hello", ()=> {
    const wrapper = shallow(<Hello/>);
    expect(wrapper).toMatchSnapshot();
    // expect(wrapper.find("h1").text()).toBe("Hello")
})

