import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessNumber from './GuessNumber';

describe('<GuessNumber />', () => {
	it('Render without crashing', () => {
		shallow(<GuessNumber />)
	})

	it('Render correct element', () => {
		const wrapper = shallow(<GuessNumber />);
		expect(wrapper.hasClass('guess-number-container')).toEqual(true);
	})

	it('Should render component with text in it', () => {
		const wrapper = shallow(<GuessNumber number='1' />)
		expect(wrapper.text()).toEqual('Guess #1');
	})
})
