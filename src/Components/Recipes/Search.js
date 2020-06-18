import React, { useState, useContext } from 'react';
import RecipeContext from '../../context/recipes/recipeContext';
import AlertContext from '../../context/alert/alertContext';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import Title from '../../Layouts/Title';
import Alert from '../../Layouts/Alert';
const Search = () => {
	const recipeC = useContext(RecipeContext);
	const alertContext = useContext(AlertContext);

	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter somthing');
		} else {
			recipeC.searchresult(text);
			setText('');
		}
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	return (
		<Container>
			<Row className='pt-5 pb-5 justify-content-center'>
				<Col md={8}>
					<Title
						title='Oh, no! You seem to have wandered into a food desert!
You must be hungry...'
						size='21px'
					/>
					<Alert />
					{/* <form onSubmit={onSubmit}>
				<input
					type='text'
					name='text'
					placeholder='search here....'
					value={text}
					onChange={onChange}
				/>
				<input
					type='submit'
					value='Search'
					className='btn btn-dark btn-block'
				/>
			</form>
			{recipeC.recipes.length > 0 && (
				<button
					className='btn btn-light btn-block'
					onClick={recipeC.clearSearch}
				>
					Clear
				</button>
			)} */}

					<Form onSubmit={onSubmit}>
						<Form.Row className='align-items-center'>
							<Col xs='auto' className='my-1' md={9}>
								<Form.Control
									type='text'
									name='text'
									placeholder='search here....'
									value={text}
									onChange={onChange}
								/>
							</Col>
							<Col xs='auto' className='my-1'>
								<Button variant='success' type='submit'>
									Search
								</Button>
							</Col>

							{recipeC.recipes.length > 0 && (
								<Col xs='auto' className='my-1'>
									<Button
										variant='secondary'
										type='button'
										onClick={recipeC.clearSearch}
									>
										Clear
									</Button>
								</Col>
							)}
							<Col xs='auto' className='my-1' md={12}>
								<Form.Text className='text-muted'>
									Searh more than 700,000+ worlwide popular recipes
								</Form.Text>
							</Col>
						</Form.Row>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Search;
