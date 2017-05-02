import React from 'react';

export default function GuessField (props) {
	return (
		<div className="guess-field-container">
			<input type="number" name="guess" placeholder="Guess 1 - 100" 
			className="guess-field"
			onChange={props.onChange} 
			/>
			<button onClick={props.onClick} className="guess">Guess</button>
		</div>
	);
}