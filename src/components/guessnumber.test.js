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
})
