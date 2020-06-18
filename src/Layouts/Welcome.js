import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Welcome() {
	return (
		<Container>
			<Row>
				<Col md={8}>
					<h3>Welcome to Food Finder</h3>
					<p>
						Good Food is a unique resource, designed as a single place for new
						recipes lovers and food enthusiasts. It features the largest
						collection of professionally-tested recipes online from food experts
						at the magazines and cookbooks you love and trust--including Cooking
						Light, Southern Living, Sunset, Coastal Living, Real Simple, and
						more.
					</p>
				</Col>
			</Row>
		</Container>
	);
}
export default Welcome;
