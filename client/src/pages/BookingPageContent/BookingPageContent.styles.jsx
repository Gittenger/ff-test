import styled from 'styled-components'
import { PSmallStyles } from '../../components/typography/typography.components.js'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletLand, mobileMM, mobileM, mobileS } = device

export const BookingPageContainer = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 100%;
	padding: 0 0 15rem;

	${tabletLand} {
		padding: 2rem 0 7rem;
	}

	${mobileMM} {
		padding: 1rem 0 5rem;
	}

	${mobileS} {
		padding: 1rem 0 3rem;
	}
`

export const BookingText = styled.div`
	width: 60%;
	margin-bottom: var(--m-M);

	& > p {
		${PSmallStyles}
		--scale: 0.65;

		&:first-of-type {
			margin-bottom: var(--m-XS);
		}
	}

	${tabletLand} {
		width: 70%;
	}

	${mobileM} {
		width: 80%;
	}
`
