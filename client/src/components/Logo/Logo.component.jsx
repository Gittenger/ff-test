import React from 'react'

import { Link } from 'react-router-dom'

import {} from './Logo.styles.jsx'

import LogoImg from '../../assets/icons/logo-no-border.svg'

const Logo = ({ className }) => (
	<>
		<Link className={className} to="/">
			<img src={LogoImg} alt="" />
		</Link>
	</>
)

export default Logo
