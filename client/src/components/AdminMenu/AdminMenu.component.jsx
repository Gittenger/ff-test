import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'

import { auth } from '../../utils/auth.js'
import { AdminMenuContainer } from './AdminMenu.styles'

const { checkAuthToken, authUser } = auth

const AdminMenu = () => {
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
		<AdminMenuContainer className={checkAuthToken() ? 'active' : ''}>
			<li>
				<Link to="/admin">Admin</Link>
			</li>
			<li>
				{checkAuthToken() && (
					<Link onClick={handleLogout} to="/">
						Logout
					</Link>
				)}
				{!checkAuthToken() && <Link to="/login">Login</Link>}
			</li>
		</AdminMenuContainer>
	)
}

export default AdminMenu
