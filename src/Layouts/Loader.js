import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Loader = () => (
	<div className='overlay'>
		{/* <img
			src={spinner}
			alt='loading...'
			style={{
				display: 'table-cell',
				verticalalign: 'middle',
				textalign: 'center',
			}}
		/> */}
		<FontAwesomeIcon
			icon={faSpinner}
			className='fa-spin spin-big overlay-spin'
		/>
	</div>
);

export default Loader;
