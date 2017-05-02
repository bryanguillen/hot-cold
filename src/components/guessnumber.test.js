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

	it('Should fire onclick callback', () => {
		const callback = jest.fn();
		const wrapper =  mount(<GuessNumber onClick={callback} />);
		const text = 2;
		wrapper.find('.guess-number-container').node.text = text;
		expect(callback); 
	})
})
