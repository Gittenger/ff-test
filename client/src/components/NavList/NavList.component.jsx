import React from 'react'
import { Link } from 'react-router-dom'

import { NavListContainer } from './NavList.styles'

const NavList = ({ className }) => {
	return (
		<NavListContainer className={`${className} nav-list`}>
			<li>
				<Link data-page="home" to="/">
					Home
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="booking" to="/booking">
					Booking
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="portfolio" to="/portfolio">
					Portfolio
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="safety" to="/safety">
					Safety
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="productions" to="/productions">
					Productions
					<div className="nav-underline"></div>
				</Link>
			</li>
			<li>
				<Link data-page="legal" to="/legal">
					Legal
					<div className="nav-underline"></div>
				</Link>
			</li>
		</NavListContainer>
	)
}

export default NavList
