import styled from 'styled-components'
import {
	PSmall,
	PStyles,
} from '../../components/typography/typography.components.js'
import { cssIndex, device } from '../../styles/css/utils.styles.js'
const { tabletLand, mobileMM, mobileS } = device

export const LegalPageContentContainer = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 100%;
	padding: 0 0 5rem;

	.image-box {
		width: 60%;
	}

	// heading
	& > h2 {
		--scale: 0.65;
	}

	// leading text
	& > p {
		width: 60%;
	}

	& > .image-box {
		${tabletLand} {
			width: 70%;
		}

		${mobileMM} {
			width: 75%;
		}

		${mobileS} {
			width: 85%;
		}
	}
`

export const LeadingText = styled(PSmall)`
	width: 70%;
	margin: var(--m-S) 0 var(--m-M);

	${mobileMM} {
		width: 80%;
	}
`

export const InfoSection = styled.div`
	${PStyles}
	width: 70%;

	p {
		margin-bottom: var(--m-S);
	}

	${mobileMM} {
		width: 80%;
	}
`
