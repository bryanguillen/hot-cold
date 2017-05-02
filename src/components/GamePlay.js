import React from 'react';
import Result from './Result';
import GuessField from './GuessField';
import GuessNumber from './GuessNumber';
import PreviousGuesses from './PreviousGuesses'

export default class GamePlay extends React.Component {
	constructor(props){
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.submitGuess = this.submitGuess.bind(this);
		this.state = {
			guess: 0,
			hotOrCold: '',
			resultColor: '', 
			guessNum: 1,
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
		
		if ( this.state.guess === randomNumber ) {
			return this.setState({ 
				hotOrCold: 'You WIN!!', 
				guessNum: this.state.guessNum + 1,
				previousGuesses: this.state.previousGuesses.concat([this.state.guess])
			})
		}

		if ( range < 11 && range > -11 ) {
			return this.setState({ 
				hotOrCold: 'Close! Burning Hot!',
				resultColor: 'hot', 
				guessNum: this.state.guessNum + 1, 
				previousGuesses: this.state.previousGuesses.concat([this.state.guess]) 
			})
		}

		return this.setState({ 
			hotOrCold: 'Wrong! Freezing Cold!',
			resultColor: 'cold', 
			guessNum: this.state.guessNum + 1,
			previousGuesses: this.state.previousGuesses.concat([this.state.guess]) 
		})
	}

	render() {
		return (
				<div className="container">
					<div className="inner-container">
						<Result result={this.state.hotOrCold}
						resultClass={this.state.resultColor}
						/>
						<GuessField onClick={this.submitGuess} 
						onChange={this.handleChange} />
						<GuessNumber number={this.state.guessNum} />
						<PreviousGuesses previousGuesses={this.state.previousGuesses} />
					</div>
				</div>
		);
	}

}
