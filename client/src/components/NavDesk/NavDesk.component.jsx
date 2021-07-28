import React from 'react'

import { NavContainer } from './NavDesk.styles.jsx'
import CIndex from '../components.index.js'

import { setActiveColor } from '../NavFunctions.js'

const NavDesk = ({ activePage }) => {
	const { Logo, NavList } = CIndex
	setActiveColor(activePage)

	return (
		<NavContainer>
			<Logo className="logo-img" />
			<NavList className="nav-list-desk" />
		</NavContainer>
	)
}

export default NavDesk
