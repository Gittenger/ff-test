import React from 'react'

import {} from './Layout.styles'
import CIndex from '../components.index.js'

const Layout = ({ children }) => {
	const { Menu } = CIndex

	return (
		<div>
			<Menu />
			{children}
		</div>
	)
}

export default Layout
