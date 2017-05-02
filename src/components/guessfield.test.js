import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessField from './GuessField';

describe('<GuessField />', () => {
	it('Renders without crashing', () => {
		shallow(<GuessField />)
	})

	it('Render blank input field', () => {
		const wrapper = shallow(<GuessField />);
		expect(wrapper.hasClass('guess-field-container')).toEqual(true);
		expect(wrapper.find('.guess'));
		expect(wrapper.find('input[name="guess"]'));
	})

	it('Simulation should have functional elements in component', () => {
		const wrapper = shallow(<GuessField />);
		wrapper.find('input[name="guess"]').simulate('change', {target: { value: 2 }});
		wrapper.find('.guess').simulate('click');
	})

	it('Should fire onClick Callback', () => {
		const callback = jest.fn();
		const wrapper =  mount(<GuessField onClick={callback} />);
		const value = 2;
		wrapper.find('input[name="guess"]').node.value = value;
		wrapper.simulate('click');
		expect(callback); 
	})
})