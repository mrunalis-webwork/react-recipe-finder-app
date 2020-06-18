import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import DietDetails from '../Diet/DietDetails';

const Diet = () => {
	const Search = () => {
		const [showResults, setShowResults] = useState(false);
		const onClick = () => setShowResults(true);
		return (
			<div>
				<Form>
					<Form.Group>
						<Form.Check
							type='checkbox'
							onChange={onClick}
							label='Check me out'
						/>
					</Form.Group>
				</Form>

				{showResults ? <Results /> : null}
			</div>
		);
	};

	const Results = () => (
		<div id='results' className='search-results'>
			<DietDetails />
		</div>
	);

	return (
		<div>
			<Search />
		</div>
	);
};

export default Diet;
