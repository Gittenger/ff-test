import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { auth } from '../../utils/auth.js'
import {} from './Menu.styles'

const { checkAuthToken, authUser } = auth

const Menu = () => {
	const [refresh, setRefresh] = useState(null)
	const handleLogout = () => {
		localStorage.removeItem('jwt')
		authUser({}, { authRoute: 'logout' })
			.then((res) => {
				window.location.reload()
			})
			.catch((err) => console.error(err))
	}

	return (
		<ul>
			<li>
				<Link to="/gallery">Gallery</Link>
			</li>
			<li>
				<Link to="/">Home</Link>
			</li>
			<li>
				{checkAuthToken() && (
					<Link onClick={handleLogout} to="/">
						Logout
					</Link>
				)}
				{!checkAuthToken() && <Link to="/login">Login</Link>}
			</li>
		</ul>
	)
}

export default Menu
