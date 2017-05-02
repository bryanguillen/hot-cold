import React from 'react';

export default function GuessField (props) {
	return (
		<div className="guess-field-container">
			<input type="number" name="guess" placeholder="Guess A Number" 
			className="guess-field"
			onChange={props.onChange} 
			/>
			<button onClick={props.onClick} className="guess">Guess</button>
		</div>
	);
}