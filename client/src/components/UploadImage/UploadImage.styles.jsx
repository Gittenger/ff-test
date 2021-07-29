import styled from 'styled-components'

import { cssIndex } from '../../styles/css/utils.styles.js'

export const UploadImageContainer = styled.div`
	${cssIndex.flexCenterCol}
	justify-content: flex-start;
	background-color: var(--black);
	color: var(--white);
	min-width: 100vw;
	min-height: 100vh;
	padding-top: var(--m-L);

	form {
		margin-bottom: var(--m-M);

		input {
			cursor: pointer;
		}
	}

	button {
		cursor: pointer;
	}

	a,
	a:link,
	a:visited {
		text-decoration: underline;
		transition: color 0.2s;

		&:hover {
			color: var(--red);
		}
	}
`
