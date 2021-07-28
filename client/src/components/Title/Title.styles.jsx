import styled from 'styled-components'

import { cssIndex, device } from '../../styles/css/utils.styles.js'

import { MainTitle } from '../typography/typography.components.js'

const { tabletMM, mobileS, mobileXS, mobileXXS } = device

export const TitleContainer = styled.div`
	position: fixed;
	left: calc(var(--navWidth));
	top: 0;
	height: var(--titleHeight);
	width: calc(100vw - var(--navWidth));
	z-index: 100;
	background: ${({ theme: { colors } }) => colors.black};
	border: none;
	box-shadow: var(--shadowTitleBox);
	${cssIndex.flexCenterCol}

	& > .logo {
		display: none;
	}

	${tabletMM} {
		left: 0;
		height: var(--titleHeight);
		width: 100vw;
		flex-direction: row;

		& > .logo {
			display: block;
			width: 4rem;

			img {
				width: 100%;
			}
		}
	}

	${mobileS} {
		& > .logo {
			width: 3.7rem;
		}
	}

	${mobileXS} {
		& > .logo {
			width: 3.2rem;
		}
	}

	${mobileXXS} {
		& > .logo {
			width: 3rem;
		}
	}
`
export const TitleText = styled(MainTitle)``
