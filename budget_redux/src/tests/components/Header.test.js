import React from 'react'
import { shallow } from  'enzyme'
import {Header} from '../../components/Header'

test ('Should render Header page', () =>{
    const wrapper = shallow (<Header startLogout ={() => {}}/>)
    expect(wrapper).toMatchSnapshot();
})