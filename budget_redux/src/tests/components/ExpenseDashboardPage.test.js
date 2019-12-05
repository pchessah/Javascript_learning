import React from 'react';// because of the jsx
import { shallow } from 'enzyme'; //hekp in creating snapshot
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () =>  {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});