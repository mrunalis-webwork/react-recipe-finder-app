import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import chicken from '../Images/categories/chicken.jpg';
import cocktails from '../Images/categories/cocktails.jpg';
import pizza from '../Images/categories/pizza.jpg';
import salad from '../Images/categories/salad.jpg';
import seafood from '../Images/categories/seafood.jpg';
import Title from '../Layouts/Title';
const options = {
	items: 4,
	navText: false,
	rewind: true,
	autoplay: true,
};
const OwlSlider = () => {
	// const category = [
	// 	{
	// 		img1: require('../Images/categories/chicken.jpg'),
	// 		alt: 'chicken',
	// 	},
	// 	{
	// 		img: require('../Images/categories/cocktails.jpg'),
	// 		alt: 'cocktails',
	// 	},
	// 	{
	// 		img: require('../Images/categories/pizza.jpg'),
	// 		alt: 'pizza',
	// 	},
	// 	{
	// 		img: require('../Images/categories/salad.jpg'),
	// 		alt: 'salad',
	// 	},
	// 	{
	// 		img: require('../Images/categories/seafood.jpg'),
	// 		alt: 'seafood',
	// 	},
	// ];

	return (
		<div id='owl-focus' className='pt-4'>
			<Title title='Popular Categories' />
			<OwlCarousel className='owl-theme pt-2' loop margin={20} {...options} nav>
				<div className='item'>
					<Link to='/chicken'>
						<img src={chicken} alt='chicken' />
					</Link>
				</div>
				<div className='item'>
					<Link to='/cocktails'>
						<img src={cocktails} alt='cocktails' />
					</Link>
				</div>
				<div className='item'>
					<Link to='/pizza'>
						<img src={pizza} alt='pizza' />
					</Link>
				</div>
				<div className='item'>
					<Link to='/salad'>
						<img src={salad} alt='salad' />
					</Link>
				</div>
				<div className='item'>
					<Link to='/seafood'>
						<img src={seafood} alt='seafood' />
					</Link>
				</div>
			</OwlCarousel>
		</div>
	);
};
export default OwlSlider;

//https://www.freecodecamp.org/forum/t/importing-images-in-react/206974/3
