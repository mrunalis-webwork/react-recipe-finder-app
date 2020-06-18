import React, { Fragment } from 'react';
import Search from '../Components/Recipes/Search';
import Recipes from '../Components/Recipes/Recipes';
import Carousel from '../Layouts/Carousel';
import OwlSlider from '../Layouts/OwlSlider';
import { Container, Row } from 'react-bootstrap';
import Welcome from '../Layouts/Welcome';
function Home() {
	return (
		<Fragment>
			<Container fluid>
				<Row>
					<Carousel />
				</Row>
			</Container>
			<Container fluid style={{ background: '#eef4fb' }}>
				<Row>
					<Search />
				</Row>
			</Container>

			<Container>
				<Recipes />
				<OwlSlider />
			</Container>

			<Container fluid className='welcome-recipe'>
				<Welcome />
			</Container>
		</Fragment>
	);
}

export default Home;
