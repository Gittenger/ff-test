import React from 'react'

import CIndex from '../components.index.js'

import { TitleContainer, TitleText } from './Title.styles.jsx'

const Title = () => {
	const { Logo } = CIndex
	return (
		<TitleContainer>
			<Logo className="logo" />
			<TitleText>Fantastic Flames</TitleText>
		</TitleContainer>
	)
}

export default Title
