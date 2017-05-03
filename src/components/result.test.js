import React from 'react';
import {shallow, mount} from 'enzyme';

import Result from './Result';

describe('<Result />', () => {
	
	it('Render without crashing', () => {
		shallow(<Result />);
	})

	it('Render with right class', () => {
		const wrapper = shallow(<Result />);
		expect(wrapper.hasClass('result-container')).toEqual(true);
	})

	it('Render with right content for cold', () => {
		const wrapper = mount(<Result resultClass="cold" result="Wrong! Freezing Cold!" />);
		expect(wrapper.hasClass('cold')).toEqual(true);
		expect(wrapper.text()).toEqual("Wrong! Freezing Cold!")
	})

	it('Render with right content for hot', () => {
		const wrapper = mount(<Result resultClass="hot" result="Close! Burning Hot!" />);
		expect(wrapper.hasClass('hot')).toEqual(true);
		expect(wrapper.text()).toEqual("Close! Burning Hot!")
	})

})