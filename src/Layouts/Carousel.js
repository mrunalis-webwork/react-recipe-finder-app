import React, { Fragment } from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import img1 from '../Images/14136.jpg';
import img2 from '../Images/19650.jpg';
import img3 from '../Images/18598.jpg';

function CarouselSlider() {
	return (
		<Fragment>
			<Carousel>
				<Carousel.Item>
					<img className='d-block w-100' src={img1} alt='First slide' />
					<Carousel.Caption>
						<h3>Meatballs Sweet</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={img2} alt='Second slide' />
					<Carousel.Caption>
						<h3>Penne Pasta</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<img className='d-block w-100' src={img3} alt='Third slide' />
					<Carousel.Caption>
						<h3>Mulled Wine Spices</h3>
						<p>
							Praesent commodo cursus magna, vel scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
			<div className='button-block'>
				<a href='#owl-focus' className='round--button'>
					<FontAwesomeIcon icon={faAngleDoubleDown} />
				</a>
			</div>
		</Fragment>
	);
}

export default CarouselSlider;
