import React from 'react'

import { PoemSection, PoemContainer } from './Poem.styles'
import data from './Poem.data.js'

const { poem } = data

const PoemContent = () => (
	<PoemContainer>
		{poem.main.map((line, i) => (
			<span key={i}>{line}</span>
		))}
		<span className="final-line">{poem.final}</span>
	</PoemContainer>
)

const Poem = () => <div>Content here</div>

export default Poem
