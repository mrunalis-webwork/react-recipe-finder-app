import React, { Fragment } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.svg';
export const Navigation = () => {
	return (
		<Fragment>
			<Navbar collapseOnSelect expand='lg' bg='light' variant='light'>
				<Navbar.Brand>
					<Link to='/'>
						<img
							src={logo}
							alt='recipe finder'
							width='50'
							height='50'
							className='d-inline-block align-top'
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='mr-auto'>
						<Nav.Link>
							<Link to='/'>Home</Link>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Fragment>
	);
};
