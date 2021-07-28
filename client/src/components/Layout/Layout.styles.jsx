import styled from 'styled-components'

import {
	cssIndex,
	device,
	deviceHeight,
} from '../../styles/css/utils.styles.js'

const {
	tabletLand,
	tabletMM,
	tabletS,
	mobileM,
	mobileXS,
	laptopS,
	laptopM,
} = device

const { heightM } = deviceHeight

export const BackgroundContainer = styled.div`
	position: relative;
	top: 0;
	width: 100%;
	background: var(--gradBg);
	color: var(--white);
	overflow-x: hidden;

	& > .toggle-nav-button {
		position: fixed;
		z-index: 500;
		bottom: 4rem;
		right: 1.2rem;
	}

	.react-reveal {
		${({ theme: { css } }) => css.flexCenterCol};
		width: 100%;
	}

	/* DEF TITLE, FOOTER, AND NAV SIZES, FOR POSITIONING */
	--navWidth: 23rem;
	--titleHeight: 12rem;
	--logoHeight: 13rem;
	--footerHeight: 17rem;

	${laptopM} {
		--titleHeight: 10rem;
	}

	${laptopS} {
		--navWidth: 20rem;
	}

	${tabletLand} {
		--titleHeight: 8rem;
	}

	${tabletMM} {
		--titleHeight: 7rem;

		background: ${({ theme: { gradient } }) => gradient.bgGradientMobile};
		${cssIndex.flexCenterCol}
	}

	${tabletS} {
		--titleHeight: 6.5rem;
	}

	${mobileM} {
	}

	${mobileXS} {
		--titleHeight: 6rem;
	}

	// for device height
	${heightM} {
		--titleHeight: 7rem;
	}
`

export const ContentContainer = styled.div`
	width: calc(100vw - var(--navWidth));
	min-height: 89vh;
	margin-left: var(--navWidth);
	margin-right: 0;
	margin-top: var(--titleHeight);
	${cssIndex.flexCenter}
	flex-direction: column;
	background: none;
	color: var(--white);
	padding-bottom: 15rem;

	h1,
	h2,
	h3,
	h4 {
		text-shadow: var(--shadowSub);
	}

	${tabletMM} {
		margin-left: 0;
		width: 100%;
	}
`
