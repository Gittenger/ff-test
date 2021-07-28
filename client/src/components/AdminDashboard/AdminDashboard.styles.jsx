import styled from 'styled-components'
import { cssIndex } from '../../styles/css/utils.styles.js'

export const AdminDashboardContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	padding-top: var(--m-L);
`

export const Links = styled.div`
	${cssIndex.flexCenterCol}

	padding-top: var(--m-M);

	li {
		margin-right: var(--m-XS);
	}

	// link
	a,
	a:link,
	a:visited {
		cursor: pointer;
		margin-right: var(--m-XS);
		background-color: var(--grey);
		color: var(--black);
		padding: 1rem;
		transition: all 0.3s;
	}

	a:hover {
		color: var(--grey);
		background-color: var(--red);
	}
`

export const RowOne = styled.ul`
	${cssIndex.flexCenter}

	margin-bottom: var(--m-L);
`

export const RowTwo = styled.ul`
	${cssIndex.flexCenter}
	padding-top: var(--m-M);
`
