import styled from 'styled-components'
import {
	H2,
	PSmallStyles,
	H2Styles,
} from '../../components/typography/typography.components.js'

import {
	cssIndex,
	device,
	deviceHeight,
} from '../../styles/css/utils.styles.js'

const { tabletL, tabletM, tabletLand, mobileM, mobileXS } = device
const { heightM } = deviceHeight

export const HomePageContainer = styled.div`
	${cssIndex.flexCenter}
	flex-direction: column;
	width: 100%;
	background: none;
	padding: 0 0 10rem;

	${tabletM} {
		padding: 0 0 7rem;
	}
`

export const HeroContainer = styled.div`
	width: 95%;
	height: 82rem;
	border-radius: var(--bRadSm);
	margin-bottom: var(--m-L);
	overflow: hidden;
	box-shadow: var(--shadowBoxOne);

	&:hover {
		& .hero-image {
			transform: scale(1.06);
			transition: all 15s;
		}
	}

	${tabletL} {
		margin-bottom: var(--m-M);
	}

	${heightM} {
		height: 60rem;
	}
`

export const HeroImg = styled.div`
	height: 100%;
	width: 100%;
	background-image: ${({ imageUrl }) => `url("${imageUrl}")`};
	background-position: left 50% top 50%;
	background-size: cover;
	background-repeat: no-repeat;
	transform: scale(1);
	transition: all 20s;

	${tabletLand} {
		background-position: left 40% top 50%;
	}

	${mobileM} {
		background-position: left 45% top 50%;
	}
`

export const HeroTwo = styled.div`
	font-family: var(--fontMain);
	width: 95%;
	margin-bottom: var(--m-S);

	.image-box {
		width: 80%;
		min-width: 37rem;

		img {
			border-radius: var(--bRadSm);
			min-height: 50rem;
			object-fit: cover;
			object-position: top;
		}

		${tabletL} {
			width: 95%;
			min-width: unset;

			img {
				height: auto;
				width: 100%;
			}
		}
	}

	& > :nth-child(1) {
		margin-bottom: var(--m-M);
	}
`

export const BottomImg = styled.div`
	${cssIndex.flexCenterCol}
	margin-bottom: var(--m-XS);
	width: 100%;

	.image-box {
		width: 87%;

		${tabletL} {
			width: 95%;
		}
	}
`

export const ContactTitle = styled(H2)`
	margin-bottom: 1.5rem;
	--scale: 0.8;
`

export const CTASectionText = styled.div`
	text-align: center;
	padding-top: 2rem;

	${mobileM} {
		${cssIndex.flexCenter}
		flex-direction: column;
	}

	// line 1
	& > :nth-child(1) {
		margin-bottom: var(--m-XXXS);
		white-space: nowrap;

		${tabletL} {
			white-space: normal;
			margin-bottom: var(--m-S);
		}

		${mobileM} {
			width: 50%;
			margin-bottom: var(--m-XS);
		}
	}

	// line 2
	& > :nth-child(2) {
		${PSmallStyles}
		--scale: .55;
		white-space: normal;
		margin-right: var(--m-XXS);

		${tabletL} {
			display: block;
			margin-right: 0;
			margin-bottom: var(--m-XXXS);
		}
	}

	// link
	a,
	a:link,
	a:visited {
		${H2Styles}
		--scale: .5;
		margin: 0;
		text-decoration: underline;
		color: var(--red);
		transition: color 0.3s;

		${mobileXS} {
			--scale: 0.4;
		}
	}

	a:hover {
		color: var(--redDark);
	}
`
