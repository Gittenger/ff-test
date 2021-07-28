import styled, { css } from 'styled-components'
import { device, deviceHeight } from '../../styles/css/utils.styles'

// MAIN TYPOGRAPHY STYLES
// set globalScale in fontVars.js

export const H2Styles = css`
	font-family: var(--fontHeading);
	letter-spacing: 0.05em;
	white-space: nowrap;
	text-align: center;
	transition: color 0.3s;
	text-shadow: ${({ theme: { styles } }) => styles.textShadowSubtitle};

	--scale: 1;
	font-size: calc((var(--scale) * 3.8rem) * var(--globalScale));
	margin-bottom: 1.4rem;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 3rem) * var(--globalScale));
		letter-spacing: 0.07em;
		margin-bottom: 1.3rem;
	}
	${device.tabletS} {
		margin-bottom: 1.2rem;
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 2.6rem) * var(--globalScale));
		margin-bottom: 0.9rem;
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		margin-bottom: 0.5rem;
	}
`
export const PStyles = css`
	font-family: var(--fontMain);
	font-weight: 400;
	letter-spacing: 0.03em;
	margin-bottom: 0.9rem;
	text-align: center;
	color: var(--white);
	transition: color 0.3s;

	--scale: 1;
	font-size: calc((var(--scale) * 2.7rem) * var(--globalScale));
	line-height: 1.3;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		letter-spacing: 0.05em;
	}
	${device.tabletS} {
		font-size: calc((var(--scale) * 1.8rem) * var(--globalScale));
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 1.7rem) * var(--globalScale));
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 1.5rem) * var(--globalScale));
	}
`
export const PSmallStyles = css`
	${PStyles}
	--scale: .75;
	line-height: 1.2;
	letter-spacing: 0.02em;
`
export const MainTitleStyles = css`
	text-align: center;
	white-space: nowrap;
	background: -webkit-linear-gradient(120deg, #eb3237 40%, #f8f8f8 300%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	text-shadow: var(--shadowTitle);
	font-size: calc(6.5rem * var(--scale));
	letter-spacing: 0.12em;
	--scale: 0.7;

	${device.laptopM} {
		font-size: calc(5.2rem * var(--scale));
	}

	${device.tabletLand} {
		font-size: calc(4.3rem * var(--scale));
	}
	${device.tabletMM} {
		margin-left: var(--m-M);
		font-size: calc(4rem * var(--scale));
	}

	${device.tabletS} {
		margin-left: var(--m-M);
		font-size: calc(3.7rem * var(--scale));
	}

	${deviceHeight.heightM} {
		font-size: calc(4rem * var(--scale));
	}

	${device.mobileMM} {
		margin-left: var(--m-M);
		font-size: calc(3.3rem * var(--scale));
	}

	${device.mobileM} {
		margin-left: var(--m-S);
		font-size: calc(2.9rem * var(--scale));
	}

	${device.mobileS} {
		font-size: calc(2.6rem * var(--scale));
	}

	${device.mobileXS} {
		margin-left: var(--m-XS);
		font-size: calc(2.3rem * var(--scale));
	}

	${device.mobileXXS} {
		margin-left: var(--m-XXS);
		font-size: calc(2rem * var(--scale));
	}
`
export const BtnStyles = css`
	font-family: var(--fontMain);
	font-weight: 400;
	letter-spacing: 0.03em;
	color: var(--white);
	transition: color 0.3s;

	--scale: 1;
	font-size: calc((var(--scale) * 2.7rem) * var(--globalScale));
	line-height: 1.3;

	${device.tabletLand} {
		font-size: calc((var(--scale) * 2.2rem) * var(--globalScale));
		letter-spacing: 0.05em;
	}
	${device.tabletS} {
		font-size: calc((var(--scale) * 1.8rem) * var(--globalScale));
	}
	${device.mobileM} {
		font-size: calc((var(--scale) * 1.7rem) * var(--globalScale));
	}
	${device.mobileS} {
		font-size: calc((var(--scale) * 1.5rem) * var(--globalScale));
	}
`

export const P = styled.p`
	${PStyles}
`
export const PSmall = styled.p`
	${PSmallStyles}
`

export const H2 = styled.h2`
	${H2Styles}
`

export const MainTitle = styled.h1`
	${MainTitleStyles}
`

export const Btn = styled.button`
	${BtnStyles}
`

export const navStyles = css`
	font-family: var(--fontHeading);
	letter-spacing: 0.24em;
	a {
		text-shadow: 2px 3px 5px #130000, -2px 0px 3px rgba(206, 239, 255, 0.2);
	}

	a:hover {
		text-shadow: 2px 3px 5px #130000, -1px 0px 3px rgba(235, 50, 55, 0.2);
	}
`

export const TComp = {
	P,
	PSmall,
	H2,
	Btn,
}

export default TComp
