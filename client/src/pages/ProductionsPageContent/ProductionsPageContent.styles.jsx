import styled from 'styled-components'

import { device, deviceMin } from '../../styles/css/utils.styles.js'

const { mobileMM, tabletLand } = device
const { minDesktop } = deviceMin

export const ProductionsPageContentContainer = styled.div`
	${({ theme: { css } }) => css.flexCenterCol};
	padding: 0 0 15rem;

	h2 {
		--scale: 0.65;
		margin-bottom: var(--m-S);
	}

	.image-box {
		width: 95%;
		margin-bottom: var(--m-M);
	}

	${minDesktop} {
		width: 85%;
	}

	${tabletLand} {
		padding: 0 0 7rem;
	}

	${mobileMM} {
		padding: 0 0 3rem;
	}
`

export const InfoSection = styled.div`
	${({ theme: { css } }) => css.flexCenterCol};
	width: 89%;

	p {
		--scale: 0.7;
		margin-bottom: var(--m-S);
		span {
			color: var(--red);
		}
	}

	.react-reveal {
		display: block;
	}
`
