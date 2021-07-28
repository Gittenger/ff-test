import styled from 'styled-components'

import { PStyles } from '../../components/typography/typography.components.js'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const PoemSection = styled.div`
	font-family: var(--fontMain);
	margin-bottom: var(--m-S);

	& > :nth-child(1) {
		margin-bottom: var(--m-M);
	}
`

export const PoemContainer = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	transition: font-size 0.2s;
	font-weight: 400;

	& > * {
		white-space: nowrap;
	}

	& > :not(.final-line) {
		${PStyles}
		font-family: var(--fontSecondary);
		--scale: 0.77;
		font-style: italic;
		line-height: 1.2;
	}

	& .final-line {
		${PStyles}
		font-family: var(--fontSecondary);
		--scale: 1.1;
		font-weight: bold;
		color: var(--red);
	}
`
