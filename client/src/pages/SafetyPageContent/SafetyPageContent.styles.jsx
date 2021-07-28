import styled from 'styled-components'
import {
	PStyles,
	H2,
	P,
} from '../../components/typography/typography.components.js'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

const { tabletLand, mobileMM, tabletM, mobileS, mobileXS } = device

export const SafetyPageContentContainer = styled.div`
	${cssIndex.flexCenterCol}
	padding: 2rem 0 15rem;

	${tabletLand} {
		padding: 1rem 0 10rem;
	}

	${mobileS} {
		padding: 0 0 7rem;
	}
`

export const MainContent = styled.section`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 90%;
`

export const LeadingTitles = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;

	// final title
	& > :nth-child(3) {
		${PStyles}
		font-family: var(--fontSecondary);
		color: var(--red);
		font-weight: bold;
		font-style: italic;
		margin-bottom: 4rem;

		${tabletLand} {
			margin-bottom: 3rem;
		}

		${mobileS} {
			margin-bottom: 2rem;
		}
	}
`

export const LeadTitle = styled(H2)`
	color: var(--grey);
	white-space: normal;
	--scale: 0.65;
	letter-spacing: 0.11em;
	margin-bottom: 7rem;
	font-weight: bold;
	font-family: var(--fontSecondary);

	${tabletLand} {
		--scale: 0.6;
		letter-spacing: 0.1em;
		margin-bottom: 4rem;
	}

	${tabletM} {
		--scale: 0.54;
	}

	${mobileMM} {
		--scale: 0.45;
	}

	${mobileS} {
		margin-bottom: 3rem;
	}

	${mobileXS} {
		--scale: 0.4;
	}
`

export const LeadSubtitle = styled(P)`
	margin-bottom: 7rem;
	font-style: italic;
	width: 70%;
	--scale: 0.7;

	font-family: var(--fontSecondary);

	${tabletLand} {
		margin-bottom: 4rem;
	}

	${mobileS} {
		margin-bottom: 2.5rem;
	}
`

export const SafetyClassInfo = styled.div`
	${PStyles}
	${cssIndex.flexCenterCol}
	p {
		width: 85%;
	}

	// paragraphs
	& > :nth-child(1),
	& > :nth-child(3) {
		margin-bottom: var(--m-XS);
	}

	& > :nth-child(3) {
		margin-bottom: 4rem;
	}

	// end-note
	& > p:last-child {
		--scale: 0.8;
		line-height: 1.2;
		margin-bottom: var(--m-M);
		span {
			color: var(--red);
		}
	}
`

export const SafetyClassList = styled.ul`
	width: 94%;
	padding-left: 5rem;
	margin-bottom: var(--m-S);

	li {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		margin-bottom: var(--m-XXS);
		text-align: left;

		p {
			text-align: left;
		}

		img {
			max-width: 20px;
			margin-bottom: var(--m-XXS);
			margin-right: var(--m-XXS);
		}
	}

	${tabletLand} {
		padding-left: 3rem;
	}

	${mobileMM} {
		padding-left: 0.5rem;
	}
`

export const SafetyClassListText = styled(P)`
	font-family: var(--fontSecondary);
`

export const SafetyHireInfo = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 85%;
	${PStyles}

	// title
	& > h2 {
		color: var(--red);
		margin-bottom: var(--m-S);
	}

	// paragraphs
	& > p {
		margin-bottom: var(--m-XS);
	}
`
