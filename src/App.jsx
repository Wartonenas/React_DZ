import { useState } from 'react';

const App = () => {
	const [color1, setColor1] = useState('red');
	const [color2, setColor2] = useState('blue');

	const handleClick = () => {
		setColor1(color1 === 'red' ? 'blue' : 'red');
		setColor2(color2 === 'red' ? 'blue' : 'red');
	};

	return (
		<div>
			<div
				style={{
					width: '50px',
					height: '50px',
					backgroundColor: color1,
					margin: '10px',
				}}
				onClick={handleClick}
			></div>
			<div
				style={{
					width: '50px',
					height: '50px',
					backgroundColor: color2,
					margin: '10px',
				}}
				onClick={handleClick}
			></div>
		</div>
	);
};

export default App;