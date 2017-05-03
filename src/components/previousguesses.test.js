import React from 'react';
import {shallow, mount} from 'enzyme';

import PreviousGuesses from './PreviousGuesses';

describe('<PreviousGuesses />', () => {
	it('Render without crashing', () => {
		shallow(<PreviousGuesses previousGuesses={[12, 13, 14]} />);
	})

	it('Render with correct wrapper with right class for styling', () => {
		const wrapper = shallow(<PreviousGuesses previousGuesses={[12, 13, 14]} />);
		expect(wrapper.hasClass('previous-guesses-container')).toEqual(true);	
	})

	it('Render with correct text in wrapper', () => {
		const wrapper = mount(<PreviousGuesses previousGuesses={[12, 13, 14]} />);
		expect(wrapper.find('.prev-guess-header').text()).toEqual("PreviousGuesses");
		expect(wrapper.find('.guess-list').text()).toEqual("121314");
	})
})