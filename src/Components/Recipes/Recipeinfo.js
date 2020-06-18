import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faClock,
	faBalanceScaleRight,
	faUtensils,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const Recipeinfo = ({
	detail: {
		label,
		calories,
		image,
		totalTime,
		totalWeight,
		ingredientLines,
		ingredients,
		digest,
		totalNutrients,
		url,
	},
}) => {
	return (
		<Container className='single-recipe mt-5'>
			<Row>
				<Col md={6}>
					<img src={image} alt={label} />
				</Col>
				<Col md={6}>
					<h1>{label}</h1>
					<ul className='twc-details mt-3 mb-4'>
						<li>
							<FontAwesomeIcon icon={faClock} /> {totalTime}
						</li>
						<li>
							<FontAwesomeIcon icon={faBalanceScaleRight} /> {totalWeight}
						</li>
						<li>
							<FontAwesomeIcon icon={faUtensils} /> {calories}
						</li>
					</ul>

					<h5>Ingredient Lines</h5>
					<ul className='ingredientLines mb-5'>
						{ingredientLines.map((label, index) => (
							<li key={index}>
								<FontAwesomeIcon icon={faAngleRight} /> {label}
							</li>
						))}
					</ul>
					<h5>Ingredient</h5>
					<ul className='ingredients mb-5'>
						{ingredients.map((label, index) => (
							<li key={index}>
								<FontAwesomeIcon icon={faAngleRight} /> {label.text} -{' '}
								{label.weight}
							</li>
						))}
					</ul>
					<Link to={url} alt={label} target='_blank' className='detail-btn'>
						Recipe in Detail
					</Link>
				</Col>
				<Col>
					<Col md={6} className='pull-left mt-4'>
						<h5>Digest</h5>
						<Table striped bordered hover>
							<thead>
								<tr>
									<th>Tags</th>
									<th>Total</th>
								</tr>
							</thead>
							<tbody>
								{digest.map((digest, index) => (
									<tr>
										<td key={index}>{digest.label}</td>
										<td key={index}>{digest.total}</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Col>
					<Col md={6} className='pull-left mt-4'>
						<h5>Total Nutrients</h5>

						<ul className='nutrients'>
							<li>
								<span>
									<b>{totalNutrients.CA.label} </b>
								</span>
								{totalNutrients.CA.quantity} | {totalNutrients.CA.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.CHOCDF.label} </b>
								</span>
								{totalNutrients.CHOCDF.quantity} | {totalNutrients.CHOCDF.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.CHOLE.label} </b>
								</span>
								{totalNutrients.CHOLE.quantity} | {totalNutrients.CHOLE.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.ENERC_KCAL.label} </b>
								</span>
								{totalNutrients.ENERC_KCAL.quantity} |
								{totalNutrients.ENERC_KCAL.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.FIBTG.label} </b>
								</span>
								{totalNutrients.FIBTG.quantity} | {totalNutrients.FIBTG.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.SUGAR.label} </b>
								</span>
								{totalNutrients.SUGAR.quantity} | {totalNutrients.SUGAR.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.VITB6A.label} </b>
								</span>
								{totalNutrients.VITB6A.quantity} | {totalNutrients.VITB6A.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.VITB12.label} </b>
								</span>
								{totalNutrients.VITB12.quantity} | {totalNutrients.VITB12.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.VITC.label} </b>
								</span>
								{totalNutrients.VITC.quantity} | {totalNutrients.VITC.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.VITD.label} </b>
								</span>
								{totalNutrients.VITD.quantity} | {totalNutrients.VITD.unit}
							</li>
							<li>
								<span>
									<b>{totalNutrients.WATER.label} </b>
								</span>
								{totalNutrients.WATER.quantity} | {totalNutrients.WATER.unit}
							</li>
						</ul>
					</Col>
				</Col>
			</Row>
		</Container>
	);
};
export default Recipeinfo;
