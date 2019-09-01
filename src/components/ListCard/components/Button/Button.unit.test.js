import React from 'react'

import { shallow } from 'enzyme';
import Button from './Button.js'

describe('Button', () => {
    test('should call "onSubmit" function while have been clicked', () => {

        const mockOnClick = jest.fn();
        const component = shallow(< Button onclick={mockOnClick} />);
        component.simulate('click');
        expect(mockOnClick).toHaveBeenCalled();
    })

})
