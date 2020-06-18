import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const RecipesDetails = ({ details: { label, image, healthLabels } }) => {
	return (
		// <Col md={4} className='recipe-block'>
		// 	<img src={image} alt={label} />
		// 	<h6>{label}</h6>
		// 	<p>{calories}</p>

		// 	<div>
		// 		<Link to={`/recipe/${label}`}> More</Link>
		// 	</div>
		// </Col>

		<Card>
			<Card.Img variant='top' src={image} />
			<Card.Body>
				<Card.Title>{label}</Card.Title>
				<p>Health Labels</p>
				<ul className='healthlabels'>
					{healthLabels.map((label, index) => (
						<li key={index}>{label}</li>
					))}
				</ul>
			</Card.Body>
			<Card.Footer>
				<larg className='text-muted'>
					<Link to={`/recipes/${label}`}>view more details</Link>
				</larg>
			</Card.Footer>
		</Card>
	);
};
export default RecipesDetails;
