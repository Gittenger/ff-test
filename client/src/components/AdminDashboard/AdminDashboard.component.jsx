import React from 'react'
import { Link } from 'react-router-dom'

import {} from './AdminDashboard.styles'

const AdminDashboard = () => {
	return (
		<div>
			<h2>Admin dashboard</h2>
			<ul>
				<li>
					<Link to="/upload-images">Add Images</Link>
				</li>
				<li>
					<Link to="/delete-images">Delete Images</Link>
				</li>
			</ul>
		</div>
	)
}

export default AdminDashboard
