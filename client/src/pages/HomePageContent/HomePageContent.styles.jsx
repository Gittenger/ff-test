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

export const ContactLinks = styled.div`
	${cssIndex.flexCenter}

	// link
	a,
	a:link,
	a:visited {
		${H2Styles}
		--scale: .5;
		margin-right: var(--m-XS);
		background-color: var(--grey);
		color: var(--black);
		padding: 0.8rem;
		transition: all 0.3s;

		${mobileXS} {
			--scale: 0.4;
		}
	}

	a:hover {
		color: var(--grey);
		background-color: var(--red);
	}
`
