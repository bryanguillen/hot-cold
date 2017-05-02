import React from 'react';
import Result from './Result';
import GuessField from './GuessField';
import GuessNumber from './GuessNumber';

export default class GamePlay extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.submitGuess = this.submitGuess.bind(this);
		this.state = {
			guess: 0,
			hotOrCold: '',
			guessNum: 0,
			previousGuesses: []
		}
	}

	handleChange(event) {
		this.setState({ guess: event.target.value });
	}

	submitGuess(event) {
		event.preventDefault();
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		let range = randomNumber - this.state.guess; 
		
		if ( range < 11 && range > -11 ) {
			return this.setState({ hotOrCold: 'You Are Burning Hot!', guessNum: this.state.guessNum + 1 })
		}

		if ( this.state.guess === randomNumber ) {
			return this.setState({ hotOrCold: 'You Are Correct!', guessNum: this.state.guessNum + 1 })
		}

		return this.setState({ hotOrCold: 'You Are Freezing Cold!', guessNum: this.state.guessNum + 1 })
	}

	render() {
		return (
			<div>
				<Result result={this.state.hotOrCold} />
				<GuessField onClick={this.submitGuess} 
				onChange={this.handleChange} />
				<GuessNumber number={this.state.guessNum} />
			</div>
		)
	}

}
