import React from "react";
import { Edit } from "../../comp/Edit";
import { shallow } from "enzyme";


let expenses = {description:"Tom", amount:40}

test("expenses with props", () => {
    const wrapper = shallow(<Edit expense={expenses}/>);
    expect(wrapper).toMatchSnapshot();
} )