import React from 'react';
import Header from './Header';
import Result from './Result';
import GuessField from './GuessField';
import GuessNumber from './GuessNumber';
import PreviousGuesses from './PreviousGuesses'

export default class GamePlay extends React.Component {
	constructor(props){
		super(props);
		let randomNumber = Math.floor(Math.random() * 100) + 1;
		this.handleChange = this.handleChange.bind(this);
		this.submitGuess = this.submitGuess.bind(this);
		this.state = {
			number: randomNumber,
			guess: 0,
			hotOrCold: '',
			resultColor: '', 
			guessNum: 1,
			previousGuesses: []
		}
	}

	handleChange(event) {
		this.setState({ guess: parseInt(event.target.value, 10) });
	}

	submitGuess(event) {
		event.preventDefault();
		let randomNumber = this.state.number;
		let range = randomNumber - this.state.guess; 

		if ( this.state.guess === randomNumber ) {
			return this.setState({ 
				hotOrCold: 'You WIN!!', 
				guessNum: 1,
				previousGuesses: []
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
						<Header />
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
