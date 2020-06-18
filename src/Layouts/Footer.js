import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPhoneAlt,
	faMapMarkerAlt,
	faEnvelopeOpenText,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
	return (
		<Fragment>
			<Container fluid className='footer-container'>
				<Container>
					<Row>
						<Col>
							<h4>About Me</h4>
							<p>
								I’m Kate Johnson, an award-winning chef and food vlogger with
								more than 10 years of professional experience in cooking.
							</p>
						</Col>
						<Col>
							<h4>Contact us</h4>
							<ul>
								<li>
									<FontAwesomeIcon icon={faPhoneAlt} />
									1-800-1234-567, 1-800-6547-321 2130
								</li>
								<li>
									<FontAwesomeIcon icon={faMapMarkerAlt} />
									Fulton Street San Diego, CA 94117-1080 USA
								</li>
								<li>
									<FontAwesomeIcon icon={faEnvelopeOpenText} />
									info@demolink.org
								</li>
							</ul>
						</Col>
						<Col>
							<h4>Popular Categories</h4>
							<ul className='pop-categ'>
								<li>
									<Link to='/chicken'>Chicken</Link>
								</li>
								<li>
									<Link to='/cocktails'>Cocktails</Link>
								</li>
								<li>
									<Link to='/pizza'>Pizza</Link>
								</li>
								<li>
									<Link to='/salad'>Salad</Link>
								</li>
								<li>
									<Link to='/seafood'>Seafood</Link>
								</li>
							</ul>
						</Col>
					</Row>
				</Container>
			</Container>
			<Container fluid className='footer-bottom-container'>
				<Container>
					<Row>
						<Col>
							<p>© 2020 All Rights Reserved Terms of Use and Privacy Policy</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</Fragment>
	);
};

export default Footer;
