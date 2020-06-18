import React from 'react';

const Title = ({ title, size }) => {
	return (
		<div className='title'>
			<h3 style={{ fontSize: size }}>{title}</h3>
		</div>
	);
};

export default Title;
